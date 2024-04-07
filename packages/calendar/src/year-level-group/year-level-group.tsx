import dayjs from 'dayjs'
import React, {forwardRef, useRef} from 'react'
import {handleControlKeyDown} from '../handle-control-key-down'
import {LevelsGroup} from '../levels-group/levels-group'
import {
  YearLevel,
  YearLevelSettings,
  YearLevelStylesNames,
} from '../year-level/year-level'

export type YearLevelGroupStylesNames = YearLevelStylesNames | 'levelsGroup'

export interface YearLevelGroupProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    Omit<
      YearLevelSettings,
      'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'
    > {
  classNames?: Partial<Record<YearLevelGroupStylesNames, string>>
  /** Number of columns to render next to each other */
  numberOfColumns?: number

  /** Year that is currently displayed */
  year: Date

  /** Function that returns level control aria-label based on year date */
  levelControlAriaLabel?: ((year: Date) => string) | string
}

const defaultProps: Partial<YearLevelGroupProps> = {
  numberOfColumns: 1,
}

export const YearLevelGroup = forwardRef<HTMLDivElement, YearLevelGroupProps>(
  (props, ref) => {
    const {
      // YearLevel settings
      year,
      locale,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      __onControlClick,
      __onControlMouseEnter,
      withCellSpacing,

      // CalendarHeader settings
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled,
      previousDisabled,
      hasNextLevel,

      // Other settings
      classNames,
      numberOfColumns = 1,
      levelControlAriaLabel,
      yearLabelFormat,
      size,
      ...others
    } = props

    const controlsRef = useRef<HTMLButtonElement[][][]>([])
    const {levelsGroup, ...yearLevelClassNames} = classNames ?? {}

    const years = Array(numberOfColumns)
      .fill(0)
      .map((_, yearIndex) => {
        const currentYear = dayjs(year).add(yearIndex, 'years').toDate()

        return (
          <YearLevel
            key={yearIndex}
            size={size}
            monthsListFormat={monthsListFormat}
            year={currentYear}
            withNext={yearIndex === numberOfColumns! - 1}
            withPrevious={yearIndex === 0}
            yearLabelFormat={yearLabelFormat}
            __onControlClick={__onControlClick}
            __onControlMouseEnter={__onControlMouseEnter}
            __onControlKeyDown={(event, payload) =>
              handleControlKeyDown({
                levelIndex: yearIndex,
                rowIndex: payload.rowIndex,
                cellIndex: payload.cellIndex,
                event,
                controlsRef,
              })
            }
            __getControlRef={(rowIndex, cellIndex, node) => {
              if (!Array.isArray(controlsRef.current[yearIndex])) {
                controlsRef.current[yearIndex] = []
              }

              if (!Array.isArray(controlsRef.current[yearIndex]![rowIndex])) {
                controlsRef.current[yearIndex]![rowIndex] = []
              }

              controlsRef.current[yearIndex]![rowIndex]![cellIndex] = node
            }}
            levelControlAriaLabel={
              typeof levelControlAriaLabel === 'function'
                ? levelControlAriaLabel(currentYear)
                : levelControlAriaLabel
            }
            locale={locale}
            minDate={minDate}
            maxDate={maxDate}
            nextIcon={nextIcon}
            previousIcon={previousIcon}
            nextLabel={nextLabel}
            previousLabel={previousLabel}
            onNext={onNext}
            onPrevious={onPrevious}
            onLevelClick={onLevelClick}
            nextDisabled={nextDisabled}
            previousDisabled={previousDisabled}
            hasNextLevel={hasNextLevel}
            getMonthControlProps={getMonthControlProps}
            classNames={yearLevelClassNames}
            withCellSpacing={withCellSpacing}
          />
        )
      })

    return (
      <LevelsGroup className={levelsGroup} ref={ref} size={size} {...others}>
        {years}
      </LevelsGroup>
    )
  }
)

YearLevelGroup.displayName = 'YearLevelGroup'
