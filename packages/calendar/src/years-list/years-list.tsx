import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import {
  PickerControl,
  PickerControlProps,
} from '../picker-control/picker-control';
import { Size, calendar } from '../styles';
import { ControlsGroupSettings } from '../types';
import { useDatesContext } from '../use-dates-context';
import { getYearInTabOrder } from './get-year-in-tab-order';
import { getYearsData } from './get-years-data';
import { isYearDisabled } from './is-year-disabled';

export type YearsListStylesNames =
  | 'yearsListControl'
  | 'yearsList'
  | 'yearsListCell'
  | 'yearsListRow';

export interface YearsListSettings extends ControlsGroupSettings {
  classNames?: Partial<Record<YearsListStylesNames, string>>;
  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** dayjs format for years list, `'YYYY'` by default  */
  yearsListFormat?: string;

  /** Adds props to year picker control based on date */
  getYearControlProps?: (date: Date) => Partial<PickerControlProps>;

  /** Component size */
  size?: Size;

  /** Determines whether controls should be separated by spacing, true by default */
  withCellSpacing?: boolean;
}

export interface YearsListProps
  extends YearsListSettings,
    React.TableHTMLAttributes<HTMLTableElement> {
  __staticSelector?: string;

  /** Decade for which years list should be displayed */
  decade: Date;
}

const defaultProps: Partial<YearsListProps> = {
  yearsListFormat: 'YYYY',
  withCellSpacing: true,
};

export const YearsList = forwardRef<HTMLTableElement, YearsListProps>(
  (props, ref) => {
    const {
      classNames,
      className,
      style,
      decade,
      yearsListFormat = defaultProps.yearsListFormat,
      locale,
      minDate,
      maxDate,
      getYearControlProps,
      __staticSelector,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing = true,
      size,
      ...others
    } = props;

    const ctx = useDatesContext();
    const { yearListCell, yearListControl } = calendar({ size });

    const years = getYearsData(decade);

    const yearInTabOrder = getYearInTabOrder(
      years,
      minDate,
      maxDate,
      getYearControlProps,
    );

    const rows = years.map((yearsRow, rowIndex) => {
      const cells = yearsRow.map((year, cellIndex) => {
        const controlProps = getYearControlProps?.(year);
        const isYearInTabOrder = dayjs(year).isSame(yearInTabOrder, 'year');
        return (
          <td
            key={cellIndex}
            className={yearListCell({ class: classNames?.yearsListCell })}
            data-with-spacing={withCellSpacing || undefined}
          >
            <PickerControl
              className={yearListControl({
                class: classNames?.yearsListControl,
              })}
              data-mantine-stop-propagation={__stopPropagation || undefined}
              disabled={isYearDisabled(year, minDate, maxDate)}
              ref={(node) => __getControlRef?.(rowIndex, cellIndex, node!)}
              {...controlProps}
              onKeyDown={(event) => {
                controlProps?.onKeyDown?.(event);
                __onControlKeyDown?.(event, {
                  rowIndex,
                  cellIndex,
                  date: year,
                });
              }}
              onClick={(event) => {
                controlProps?.onClick?.(event);
                __onControlClick?.(event, year);
              }}
              onMouseEnter={(event) => {
                controlProps?.onMouseEnter?.(event);
                __onControlMouseEnter?.(event, year);
              }}
              onMouseDown={(event) => {
                controlProps?.onMouseDown?.(event);
                __preventFocus && event.preventDefault();
              }}
              tabIndex={__preventFocus || !isYearInTabOrder ? -1 : 0}
            >
              {dayjs(year).locale(ctx.locale).format(yearsListFormat)}
            </PickerControl>
          </td>
        );
      });

      return (
        <tr key={rowIndex} className={classNames?.yearsListRow}>
          {cells}
        </tr>
      );
    });

    return (
      <table ref={ref} className={classNames?.yearsList} {...others}>
        <tbody>{rows}</tbody>
      </table>
    );
  },
);

YearsList.displayName = 'YearsList';
