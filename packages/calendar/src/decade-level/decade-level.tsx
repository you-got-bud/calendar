import dayjs from 'dayjs'
import React, {forwardRef} from 'react'
import {
  CalendarHeader,
  CalendarHeaderSettings,
  CalendarHeaderStylesNames,
} from '../calendar-header/calendar-header'
import {useDatesContext} from '../use-dates-context'
import {
  YearsList,
  YearsListSettings,
  YearsListStylesNames,
} from '../years-list/years-list'
import {getDecadeRange} from './get-decade-range'

export type DecadeLevelStylesNames =
  | YearsListStylesNames
  | CalendarHeaderStylesNames

export interface DecadeLevelBaseSettings
  extends Omit<YearsListSettings, 'classNames'> {
  /** dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY" */
  decadeLabelFormat?:
    | string
    | ((startOfDecade: Date, endOfDecade: Date) => React.ReactNode)
}

export interface DecadeLevelSettings
  extends DecadeLevelBaseSettings,
    Omit<
      CalendarHeaderSettings,
      'onLevelClick' | 'hasNextLevel' | 'classNames'
    > {}

export interface DecadeLevelProps
  extends DecadeLevelSettings,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  classNames?: Partial<Record<DecadeLevelStylesNames, string>>
  __staticSelector?: string

  /** Decade that is currently displayed */
  decade: Date

  /** aria-label for change level control */
  levelControlAriaLabel?: string
}

const defaultProps: Partial<DecadeLevelProps> = {
  decadeLabelFormat: 'YYYY',
}

export const DecadeLevel = forwardRef<HTMLDivElement, DecadeLevelProps>(
  (props, ref) => {
    const {
      // YearsList settings
      decade,
      locale,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      __getControlRef,
      __onControlKeyDown,
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
      levelControlAriaLabel,
      withNext,
      withPrevious,

      // Other props
      decadeLabelFormat = defaultProps.decadeLabelFormat,
      classNames,
      __staticSelector,
      __stopPropagation,
      size,
      ...others
    } = props

    const ctx = useDatesContext()
    const [startOfDecade, endOfDecade] = getDecadeRange(decade)
    const defaultClassNames: Record<DecadeLevelStylesNames, string> = {
      calendarHeader: '',
      calendarHeaderControl: '',
      calendarHeaderControlIcon: '',
      calendarHeaderLevel: '',
      yearsList: '',
      yearsListCell: '',
      yearsListControl: '',
      yearsListRow: '',
    }
    const {
      calendarHeader,
      calendarHeaderControl,
      calendarHeaderControlIcon,
      calendarHeaderLevel,
      ...yearListClassNames
    } = classNames ?? defaultClassNames
    const {
      yearsList,
      yearsListCell,
      yearsListControl,
      yearsListRow,
      ...calendarHeaderClassNames
    } = classNames ?? defaultClassNames

    const _nextDisabled =
      typeof nextDisabled === 'boolean'
        ? nextDisabled
        : maxDate
          ? !dayjs(endOfDecade).endOf('year').isBefore(maxDate)
          : false

    const _previousDisabled =
      typeof previousDisabled === 'boolean'
        ? previousDisabled
        : minDate
          ? !dayjs(startOfDecade).startOf('year').isAfter(minDate)
          : false

    const formatDecade = (date: Date, format: string) =>
      dayjs(date)
        .locale(locale || ctx.locale)
        .format(format)

    return (
      <div data-decade-level ref={ref} {...others}>
        <CalendarHeader
          label={
            typeof decadeLabelFormat === 'function'
              ? decadeLabelFormat(startOfDecade!, endOfDecade!)
              : `${formatDecade(startOfDecade!, decadeLabelFormat!)} – ${formatDecade(
                  endOfDecade!,
                  decadeLabelFormat!
                )}`
          }
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          nextDisabled={_nextDisabled}
          previousDisabled={_previousDisabled}
          hasNextLevel={false}
          levelControlAriaLabel={levelControlAriaLabel}
          withNext={withNext}
          withPrevious={withPrevious}
          size={size}
          classNames={calendarHeaderClassNames}
        />

        <YearsList
          size={size}
          decade={decade}
          locale={locale}
          minDate={minDate}
          maxDate={maxDate}
          yearsListFormat={yearsListFormat}
          getYearControlProps={getYearControlProps}
          __getControlRef={__getControlRef}
          __onControlKeyDown={__onControlKeyDown}
          __onControlClick={__onControlClick}
          __onControlMouseEnter={__onControlMouseEnter}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          withCellSpacing={withCellSpacing}
          classNames={yearListClassNames}
        />
      </div>
    )
  }
)

DecadeLevel.displayName = 'DecadeLevel'
