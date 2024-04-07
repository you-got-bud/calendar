import React, {forwardRef} from 'react'
import {cn} from '../cn'
import {Size, calendar} from '../styles'
import type {DayOfWeek} from '../types'
import {useDatesContext} from '../use-dates-context'
import {getWeekdayNames} from './get-weekday-names'

export type DayHeadStyleNames = 'dayHead' | 'dayHeadRow'

export interface WeekdaysRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  classNames?: Partial<Record<DayHeadStyleNames, string>>

  /** Controls size */
  size?: Size

  /** dayjs locale, defaults to value defined in DatesProvider */
  locale?: string

  /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
  firstDayOfWeek?: DayOfWeek

  /** dayjs format to get weekday name, defaults to "dd" */
  weekdayFormat?: string | ((date: Date) => React.ReactNode)

  /** Choose cell type that will be used to render weekdays, defaults to th */
  cellComponent?: 'td' | 'th'
}

const defaultProps: Partial<WeekdaysRowProps> = {}

export const WeekdaysRow = forwardRef<HTMLTableRowElement, WeekdaysRowProps>(
  (props, ref) => {
    const {
      classNames,
      className,
      style,
      locale,
      firstDayOfWeek,
      weekdayFormat,
      size,
      cellComponent: CellComponent = 'th',
      ...others
    } = props

    const {dayHead} = calendar({size})
    const ctx = useDatesContext()

    const weekdays = getWeekdayNames({
      locale: ctx.getLocale(locale),
      format: weekdayFormat,
      firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    }).map((weekday, index) => (
      <th
        key={index.toString()}
        className={dayHead({class: classNames?.dayHead})}
      >
        {weekday}
      </th>
    ))

    return (
      <tr
        ref={ref}
        className={cn(className, classNames?.dayHeadRow, 'has')}
        {...others}
      >
        {weekdays}
      </tr>
    )
  }
)

WeekdaysRow.displayName = 'DayHeader'
