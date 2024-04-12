import dayjs from 'dayjs'
import {forwardRef} from 'react'
import {
  PickerControl,
  PickerControlProps,
} from '../picker-control/picker-control'
import {Size, calendar} from '../styles'
import {ControlsGroupSettings} from '../types'
import {useDatesContext} from '../use-dates-context'
import {getMonthsData} from './get-month-data'
import {getMonthInTabOrder} from './get-month-in-tab-order'
import {isMonthDisabled} from './is-month-disabled'

export type MonthsListStylesNames =
  | 'monthsList'
  | 'monthsListCell'
  | 'monthsListRow'
  | 'monthsListControl'

export interface MonthsListSettings extends ControlsGroupSettings {
  /** dayjs format for months list  */
  monthsListFormat?: string

  /** Adds props to month picker control based on date */
  getMonthControlProps?: (date: Date) => Partial<PickerControlProps>

  size?: Size
  /** Determines whether controls should be separated by spacing, true by default */
  withCellSpacing?: boolean
  classNames?: Partial<Record<MonthsListStylesNames, string>>
}
export interface MonthsListProps extends MonthsListSettings {
  /** Year for which months list should be displayed */
  year: Date
}

const defaultProps: Partial<MonthsListProps> = {
  monthsListFormat: 'MMM',
  withCellSpacing: true,
}

export const MonthsList = forwardRef<HTMLTableElement, MonthsListProps>(
  (props, ref) => {
    const {
      classNames,
      year,
      monthsListFormat = defaultProps.monthsListFormat,
      locale,
      minDate,
      maxDate,
      getMonthControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      withCellSpacing = defaultProps.withCellSpacing,
      ...others
    } = props
    const {monthList, monthListCell, monthListControl} = calendar({
      size: props.size,
    })

    const ctx = useDatesContext()

    const months = getMonthsData(year)

    const monthInTabOrder = getMonthInTabOrder(
      months,
      minDate,
      maxDate,
      getMonthControlProps
    )

    const rows = months.map((monthsRow, rowIndex) => {
      const cells = monthsRow.map((month, cellIndex) => {
        const controlProps = getMonthControlProps?.(month)
        const isMonthInTabOrder = dayjs(month).isSame(monthInTabOrder, 'month')
        return (
          <td
            key={cellIndex}
            className={monthListCell({class: classNames?.monthsListCell})}
            data-with-spacing={withCellSpacing || undefined}
          >
            <PickerControl
              className={monthListControl({
                class: classNames?.monthsListControl,
              })}
              disabled={isMonthDisabled(month, minDate, maxDate)}
              ref={node => __getControlRef?.(rowIndex, cellIndex, node!)}
              {...controlProps}
              onKeyDown={event => {
                controlProps?.onKeyDown?.(event)
                __onControlKeyDown?.(event, {
                  rowIndex,
                  cellIndex,
                  date: month,
                })
              }}
              onClick={event => {
                controlProps?.onClick?.(event)
                __onControlClick?.(event, month)
              }}
              onMouseEnter={event => {
                controlProps?.onMouseEnter?.(event)
                __onControlMouseEnter?.(event, month)
              }}
              onMouseDown={event => {
                controlProps?.onMouseDown?.(event)
              }}
              tabIndex={!isMonthInTabOrder ? -1 : 0}
            >
              {dayjs(month)
                .locale(ctx.getLocale(locale))
                .format(monthsListFormat)}
            </PickerControl>
          </td>
        )
      })

      return (
        <tr key={rowIndex} className={classNames?.monthsListRow}>
          {cells}
        </tr>
      )
    })

    return (
      <table
        ref={ref}
        className={monthList({class: classNames?.monthsList})}
        {...others}
      >
        <tbody>{rows}</tbody>
      </table>
    )
  }
)

MonthsList.displayName = 'MonthsList'
