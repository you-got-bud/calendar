import dayjs from 'dayjs'
import React, {forwardRef, useRef} from 'react'
import {
  DecadeLevel,
  DecadeLevelSettings,
  DecadeLevelStylesNames,
} from '../decade-level/decade-level'
import {handleControlKeyDown} from '../handle-control-key-down'
import {LevelsGroup} from '../levels-group/levels-group'

export type DecadeLevelGroupStylesNames = 'levelsGroup' | DecadeLevelStylesNames

export interface DecadeLevelGroupProps
  extends Omit<
      DecadeLevelSettings,
      'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'
    >,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  classNames?: Partial<Record<DecadeLevelGroupStylesNames, string>>

  /** Number of columns to render next to each other */
  numberOfColumns?: number

  /** Decade that is currently displayed */
  decade: Date

  /** Function that returns level control aria-label based on year date */
  levelControlAriaLabel?: ((decade: Date) => string) | string
}

const defaultProps: Partial<DecadeLevelGroupProps> = {
  numberOfColumns: 1,
}

export const DecadeLevelGroup = forwardRef<
  HTMLDivElement,
  DecadeLevelGroupProps
>((props, ref) => {
  const {
    // DecadeLevel settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,

    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,

    // Other settings
    classNames,
    __stopPropagation,
    numberOfColumns = 1,
    levelControlAriaLabel,
    decadeLabelFormat,
    size,
    ...others
  } = props

  const controlsRef = useRef<HTMLButtonElement[][][]>([])
  const {levelsGroup, ...decadeLevelClassNames} = classNames ?? {}

  const decades = Array(numberOfColumns)
    .fill(0)
    .map((_, decadeIndex) => {
      const currentDecade = dayjs(decade)
        .add(decadeIndex * 10, 'years')
        .toDate()

      return (
        <DecadeLevel
          key={decadeIndex}
          size={size}
          yearsListFormat={yearsListFormat}
          decade={currentDecade}
          withNext={decadeIndex === numberOfColumns! - 1}
          withPrevious={decadeIndex === 0}
          decadeLabelFormat={decadeLabelFormat}
          __onControlClick={__onControlClick}
          __onControlMouseEnter={__onControlMouseEnter}
          __onControlKeyDown={(event, payload) =>
            handleControlKeyDown({
              levelIndex: decadeIndex,
              rowIndex: payload.rowIndex,
              cellIndex: payload.cellIndex,
              event,
              controlsRef,
            })
          }
          __getControlRef={(rowIndex, cellIndex, node) => {
            if (!Array.isArray(controlsRef.current[decadeIndex])) {
              controlsRef.current[decadeIndex] = []
            }

            if (!Array.isArray(controlsRef.current[decadeIndex]![rowIndex])) {
              controlsRef.current[decadeIndex]![rowIndex] = []
            }

            controlsRef.current[decadeIndex]![rowIndex]![cellIndex] = node
          }}
          levelControlAriaLabel={
            typeof levelControlAriaLabel === 'function'
              ? levelControlAriaLabel(currentDecade)
              : levelControlAriaLabel
          }
          locale={locale}
          minDate={minDate}
          maxDate={maxDate}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          nextDisabled={nextDisabled}
          previousDisabled={previousDisabled}
          getYearControlProps={getYearControlProps}
          classNames={decadeLevelClassNames}
          withCellSpacing={withCellSpacing}
        />
      )
    })

  return (
    <LevelsGroup className={levelsGroup} ref={ref} size={size} {...others}>
      {decades}
    </LevelsGroup>
  )
})

DecadeLevelGroup.displayName = 'DecadeLevelGroup'
