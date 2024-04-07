import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import {
  CalendarHeader,
  CalendarHeaderSettings,
  CalendarHeaderStylesNames,
} from '../calendar-header/calendar-header';
import {
  MonthsList,
  MonthsListSettings,
  MonthsListStylesNames,
} from '../months-list/month-list';
import { useDatesContext } from '../use-dates-context';

export type YearLevelStylesNames =
  | MonthsListStylesNames
  | CalendarHeaderStylesNames;

export interface YearLevelBaseSettings extends MonthsListSettings {
  /** dayjs label format to display year label or a function that returns year label based on year value, defaults to "YYYY" */
  yearLabelFormat?: string | ((year: Date) => React.ReactNode);
}

export interface YearLevelSettings
  extends Omit<YearLevelBaseSettings, 'classNames'>,
    Omit<CalendarHeaderSettings, 'classNames'> {}

export interface YearLevelProps
  extends YearLevelSettings,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  classNames?: Partial<Record<YearLevelStylesNames, string>>;

  /** Year that is currently displayed */
  year: Date;

  /** aria-label for change level control */
  levelControlAriaLabel?: string;
}

const defaultProps: Partial<YearLevelProps> = {
  yearLabelFormat: 'YYYY',
};

export const YearLevel = forwardRef<HTMLDivElement, YearLevelProps>(
  (props, ref) => {
    const {
      // MonthsList settings
      year,
      locale,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      __getControlRef,
      __onControlKeyDown,
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
      levelControlAriaLabel,
      withNext,
      withPrevious,

      // Other props
      yearLabelFormat = defaultProps.yearLabelFormat,
      size,
      classNames,
      ...others
    } = props;

    const ctx = useDatesContext();

    const _nextDisabled =
      typeof nextDisabled === 'boolean'
        ? nextDisabled
        : maxDate
          ? !dayjs(year).endOf('year').isBefore(maxDate)
          : false;

    const _previousDisabled =
      typeof previousDisabled === 'boolean'
        ? previousDisabled
        : minDate
          ? !dayjs(year).startOf('year').isAfter(minDate)
          : false;

    const calendarHeaderClassNames: Record<CalendarHeaderStylesNames, string> =
      {
        calendarHeader: classNames?.calendarHeader ?? '',
        calendarHeaderControl: classNames?.calendarHeaderControl ?? '',
        calendarHeaderControlIcon: classNames?.calendarHeaderControlIcon ?? '',
        calendarHeaderLevel: classNames?.calendarHeaderLevel ?? '',
      };
    const monthsListClassnames: Record<MonthsListStylesNames, string> = {
      monthsList: classNames?.monthsList ?? '',
      monthsListCell: classNames?.monthsListCell ?? '',
      monthsListControl: classNames?.monthsListControl ?? '',
      monthsListRow: classNames?.monthsListRow ?? '',
    };
    return (
      <div data-year-level ref={ref} {...others}>
        <CalendarHeader
          label={
            typeof yearLabelFormat === 'function'
              ? yearLabelFormat(year)
              : dayjs(year)
                  .locale(locale || ctx.locale)
                  .format(yearLabelFormat)
          }
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          nextLabel={nextLabel}
          classNames={calendarHeaderClassNames}
          previousLabel={previousLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          onLevelClick={onLevelClick}
          nextDisabled={_nextDisabled}
          previousDisabled={_previousDisabled}
          hasNextLevel={hasNextLevel}
          levelControlAriaLabel={levelControlAriaLabel}
          size={size}
          withNext={withNext}
          withPrevious={withPrevious}
        />

        <MonthsList
          year={year}
          locale={locale}
          size={size}
          minDate={minDate}
          classNames={monthsListClassnames}
          maxDate={maxDate}
          monthsListFormat={monthsListFormat}
          getMonthControlProps={getMonthControlProps}
          __getControlRef={__getControlRef}
          __onControlKeyDown={__onControlKeyDown}
          __onControlClick={__onControlClick}
          __onControlMouseEnter={__onControlMouseEnter}
          withCellSpacing={withCellSpacing}
        />
      </div>
    );
  },
);

YearLevel.displayName = 'YearLevel';
