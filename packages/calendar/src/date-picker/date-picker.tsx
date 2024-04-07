'use client'
import React, {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
} from 'react'
import {
  Calendar,
  CalendarBaseProps,
  CalendarSettings,
  CalendarStylesNames,
} from '../calendar/calendar'
import {DecadeLevelBaseSettings} from '../decade-level/decade-level'
import {MonthLevelBaseSettings} from '../month-level/month-level'
import {shiftTimezone} from '../shift-timezone'
import {CalendarLevel, DatePickerType, PickerBaseProps} from '../types'
import {useDatesContext} from '../use-dates-context'
import {YearLevelBaseSettings} from '../year-level/year-level'
import {useDatesState} from './use-dates-state'

export type DatePickerStylesNames = CalendarStylesNames

export interface DatePickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    Omit<DecadeLevelBaseSettings, 'classNames'>,
    Omit<YearLevelBaseSettings, 'classNames'>,
    Omit<MonthLevelBaseSettings, 'classNames'>,
    CalendarBaseProps,
    CalendarSettings {
  /** Max level that user can go up to (decade, year, month), defaults to decade */
  maxLevel?: CalendarLevel

  /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
  defaultLevel?: CalendarLevel

  /** Current level displayed to the user (decade, year, month), used for controlled component */
  level?: CalendarLevel

  /** Called when level changes */
  onLevelChange?: (level: CalendarLevel) => void
}

export interface DatePickerProps<Type extends DatePickerType = 'default'>
  extends DatePickerBaseProps<Type>,
    Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'value' | 'onChange' | 'defaultValue'
    > {}

const defaultProps: Partial<DatePickerProps> = {
  type: 'default',
  defaultLevel: 'month',
  numberOfColumns: 1,
}

type DatePickerComponent = (<Type extends DatePickerType = 'default'>(
  props: DatePickerProps<Type> & {ref?: React.ForwardedRef<HTMLDivElement>}
) => JSX.Element) & {displayName?: string}

export const DatePicker: DatePickerComponent = forwardRef(
  <Type extends DatePickerType = 'default'>(
    props: DatePickerProps<Type>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const {
      size = 'sm',
      classNames,
      type,
      defaultValue,
      value,
      onChange,
      getDayProps,
      allowSingleDateInRange,
      allowDeselect,
      onMouseLeave,
      numberOfColumns,
      hideOutsideDates,
      __onDayMouseEnter,
      __onDayClick,
      __timezoneApplied,
      ...others
    } = props

    const {
      onDateChange,
      onRootMouseLeave,
      onHoveredDateChange,
      getControlProps,
    } = useDatesState({
      type: type as any,
      level: 'day',
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange: onChange as any,
      onMouseLeave,
      applyTimezone: !__timezoneApplied,
    })

    const ctx = useDatesContext()

    return (
      <Calendar
        ref={ref}
        minLevel="month"
        classNames={classNames}
        size={size}
        onMouseLeave={onRootMouseLeave}
        numberOfColumns={numberOfColumns}
        hideOutsideDates={hideOutsideDates ?? numberOfColumns !== 1}
        __onDayMouseEnter={(_event, date) => {
          onHoveredDateChange(date)
          __onDayMouseEnter?.(_event, date)
        }}
        __onDayClick={(_event, date) => {
          onDateChange(date)
          __onDayClick?.(_event, date)
        }}
        getDayProps={date => ({
          ...getControlProps(date),
          ...getDayProps?.(date),
        })}
        {...others}
        date={shiftTimezone(
          'add',
          others.date,
          ctx.getTimezone(),
          __timezoneApplied
        )}
        __timezoneApplied
      />
    )
  }
) as any

DatePicker.displayName = 'DatePicker'
