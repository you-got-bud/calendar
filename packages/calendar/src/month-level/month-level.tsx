import dayjs from 'dayjs';
import React, { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import {
  CalendarHeader,
  CalendarHeaderSettings,
  CalendarHeaderStylesNames,
} from '../calendar-header/calendar-header';
import { Month, MonthSettings, MonthStylesNames } from '../month/month';
import { useDatesContext } from '../use-dates-context';

export type MonthLevelStylesNames =
  | MonthStylesNames
  | CalendarHeaderStylesNames;

export interface MonthLevelBaseSettings
  extends Omit<MonthSettings, 'classNames'> {
  /** dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY" */
  monthLabelFormat?: string | ((month: Date) => React.ReactNode);
}

export interface MonthLevelSettings
  extends MonthLevelBaseSettings,
    Omit<CalendarHeaderSettings, 'classNames'> {}

export interface MonthLevelProps
  extends MonthLevelSettings,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classNames?: Partial<Record<MonthLevelStylesNames, string>>;

  /** Month that is currently displayed */
  month: Date;

  /** aria-label for change level control */
  levelControlAriaLabel?: string;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;
}

const defaultProps: Partial<MonthLevelProps> = {
  monthLabelFormat: 'MMMM YYYY',
};

export const MonthLevel = forwardRef<HTMLDivElement, MonthLevelProps>(
  (props, ref) => {
    const {
      // Month settings
      month,
      locale,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      minDate,
      maxDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      __getDayRef,
      __onDayKeyDown,
      __onDayClick,
      __onDayMouseEnter,
      withCellSpacing,

      // CalendarHeader settings
      __preventFocus,
      __stopPropagation,
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
      levelControlAriaLabel,
      withNext,
      withPrevious,

      // Other props
      monthLabelFormat = defaultProps.monthLabelFormat,
      classNames,
      size,
      static: isStatic,
      ...others
    } = props;

    const ctx = useDatesContext();
    const {
      calendarHeader,
      calendarHeaderControl,
      calendarHeaderControlIcon,
      calendarHeaderLevel,
      ...monthClassNames
    } = classNames ?? {};
    const {
      day,
      dayHead,
      dayHeadRow,
      monthCell,
      monthRow,
      monthTbody,
      monthThead,
      ...calendarHeaderClassNames
    } = classNames ?? {};

    const _nextDisabled =
      typeof nextDisabled === 'boolean'
        ? nextDisabled
        : maxDate
          ? !dayjs(month).endOf('month').isBefore(maxDate)
          : false;

    const _previousDisabled =
      typeof previousDisabled === 'boolean'
        ? previousDisabled
        : minDate
          ? !dayjs(month).startOf('month').isAfter(minDate)
          : false;

    return (
      <div data-month-level ref={ref} {...others}>
        <CalendarHeader
          label={
            typeof monthLabelFormat === 'function'
              ? monthLabelFormat(month)
              : dayjs(month)
                  .locale(locale || ctx.locale)
                  .format(monthLabelFormat)
          }
          classNames={calendarHeaderClassNames}
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          size={size}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          onLevelClick={onLevelClick}
          nextDisabled={_nextDisabled}
          previousDisabled={_previousDisabled}
          hasNextLevel={hasNextLevel}
          levelControlAriaLabel={levelControlAriaLabel}
          withNext={withNext}
          withPrevious={withPrevious}
        />

        <Month
          month={month}
          locale={locale}
          firstDayOfWeek={firstDayOfWeek}
          weekdayFormat={weekdayFormat}
          weekendDays={weekendDays}
          getDayProps={getDayProps}
          excludeDate={excludeDate}
          classNames={monthClassNames}
          minDate={minDate}
          maxDate={maxDate}
          renderDay={renderDay}
          size={size}
          hideOutsideDates={hideOutsideDates}
          hideWeekdays={hideWeekdays}
          getDayAriaLabel={getDayAriaLabel}
          __getDayRef={__getDayRef}
          __onDayKeyDown={__onDayKeyDown}
          __onDayClick={__onDayClick}
          __onDayMouseEnter={__onDayMouseEnter}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          static={isStatic}
          withCellSpacing={withCellSpacing}
        />
      </div>
    );
  },
);

MonthLevel.displayName = 'MonthLevel';
