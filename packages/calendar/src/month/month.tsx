'use client'
import dayjs from 'dayjs'
import React, {forwardRef} from 'react'
import {DayHeadStyleNames, WeekdaysRow} from '../day-header/day-header'
import {Day, DayProps, DayStylesNames} from '../day/day'
import {Size, calendar} from '../styles'
import {ControlKeydownPayload, DayOfWeek} from '../types'
import {useDatesContext} from '../use-dates-context'
import {getDateInTabOrder} from './get-date-in-tab-order'
import {getMonthDays} from './get-month-days'
import {isAfterMinDate} from './is-after-min-date'
import {isBeforeMaxDate} from './is-before-max-date'
import {isSameMonth} from './is-same-month'

export type MonthStylesNames =
  | 'month'
  | 'monthRow'
  | 'month'
  | 'monthThead'
  | 'monthTbody'
  | 'monthCell'
  | DayHeadStyleNames
  | DayStylesNames

export interface MonthSettings {
  classNames?: Partial<Record<MonthStylesNames, string>>
  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean

  /** Called when day is clicked with click event and date */
  __onDayClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    date: Date
  ) => void

  /** Called when mouse enters day */
  __onDayMouseEnter?: (
    event: React.MouseEvent<HTMLButtonElement>,
    date: Date
  ) => void

  /** Called when any keydown event is registered on day, used for arrows navigation */
  __onDayKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload
  ) => void

  /** Assigns ref of every day based on its position in the table, used for arrows navigation */
  __getDayRef?: (
    rowIndex: number,
    cellIndex: number,
    node: HTMLButtonElement
  ) => void

  /** dayjs locale, defaults to value defined in DatesProvider */
  locale?: string

  /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
  firstDayOfWeek?: DayOfWeek

  /** dayjs format for weekdays names, defaults to "dd" */
  weekdayFormat?: string | ((date: Date) => React.ReactNode)

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
  weekendDays?: DayOfWeek[]

  /** Adds props to Day component based on date */
  getDayProps?: (
    date: Date
  ) => Omit<Partial<DayProps>, 'classNames' | 'styles' | 'vars'>

  /** Callback function to determine whether the day should be disabled */
  excludeDate?: (date: Date) => boolean

  /** Minimum possible date */
  minDate?: Date

  /** Maximum possible date */
  maxDate?: Date

  /** Controls day value rendering */
  renderDay?: (date: Date) => React.ReactNode

  /** Determines whether outside dates should be hidden, defaults to false */
  hideOutsideDates?: boolean

  /** Determines whether weekdays row should be hidden, defaults to false */
  hideWeekdays?: boolean

  /** Assigns aria-label to days based on date */
  getDayAriaLabel?: (date: Date) => string

  /** Controls size */
  size?: Size

  /** Determines whether controls should be separated by spacing, true by default */
  withCellSpacing?: boolean
}

export interface MonthProps
  extends MonthSettings,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    > {
  /** Month to display */
  month: Date

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean
}

const defaultProps: Partial<MonthProps> = {
  withCellSpacing: true,
}

export const Month = forwardRef<HTMLTableElement, MonthProps>((props, ref) => {
  const {
    classNames,
    className,
    style,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing = true,
    size,
    ...others
  } = props
  const {day, ...monthClassNames} = classNames ?? {}
  const {
    month: monthClassName,
    monthCell,
    monthRow,
    monthTbody,
    monthThead,
    ...dayHeaderClassnames
  } = monthClassNames

  const ctx = useDatesContext()
  const dates = getMonthDays({
    month,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: ctx.consistentWeeks,
  })

  const dateInTabOrder = getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  )
  const {monthList, monthListCell, monthListControl, dayList} = calendar({
    size,
  })

  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month)
      const ariaLabel =
        getDayAriaLabel?.(date) ||
        dayjs(date)
          .locale(locale || ctx.locale)
          .format('D MMMM YYYY')
      const dayProps = getDayProps?.(date)
      const isDateInTabOrder = dayjs(date).isSame(dateInTabOrder, 'date')

      return (
        <td
          key={date.toString()}
          className={monthListCell({class: monthClassNames.monthCell})}
          data-with-spacing={withCellSpacing || undefined}
        >
          <Day
            data-mantine-stop-propagation={__stopPropagation || undefined}
            renderDay={renderDay}
            date={date}
            size={size}
            weekend={ctx
              .getWeekendDays(weekendDays)
              .includes(date.getDay() as DayOfWeek)}
            outside={outside}
            hidden={hideOutsideDates ? outside : false}
            aria-label={ariaLabel}
            static={isStatic}
            className={day}
            disabled={
              excludeDate?.(date) ||
              !isBeforeMaxDate(date, maxDate) ||
              !isAfterMinDate(date, minDate)
            }
            ref={node => __getDayRef?.(rowIndex, cellIndex, node!)}
            {...dayProps}
            onKeyDown={event => {
              dayProps?.onKeyDown?.(event)
              __onDayKeyDown?.(event, {rowIndex, cellIndex, date})
            }}
            onMouseEnter={event => {
              dayProps?.onMouseEnter?.(event)
              __onDayMouseEnter?.(event, date)
            }}
            onClick={event => {
              dayProps?.onClick?.(event)

              __onDayClick?.(event, date)
            }}
            onMouseDown={event => {
              dayProps?.onMouseDown?.(event)
              __preventFocus && event.preventDefault()
            }}
            tabIndex={__preventFocus || !isDateInTabOrder ? -1 : 0}
          />
        </td>
      )
    })

    return (
      <tr key={rowIndex} className={classNames?.monthRow}>
        {cells}
      </tr>
    )
  })
  return (
    <table
      className={dayList({class: classNames?.month})}
      ref={ref}
      {...others}
    >
      {!hideWeekdays && (
        <thead className={classNames?.monthThead}>
          <WeekdaysRow
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            weekdayFormat={weekdayFormat}
            size={size}
            classNames={dayHeaderClassnames}
          />
        </thead>
      )}
      <tbody className={classNames?.monthTbody}>{rows}</tbody>
    </table>
  )
})

Month.displayName = 'Month'
