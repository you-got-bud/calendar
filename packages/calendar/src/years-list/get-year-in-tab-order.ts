import dayjs from 'dayjs';
import { PickerControlProps } from '../picker-control/picker-control';
import { isYearDisabled } from './is-year-disabled';

export function getYearInTabOrder(
  years: Date[][],
  minDate: Date | undefined,
  maxDate: Date | undefined,
  getYearControlProps:
    | ((year: Date) => Partial<PickerControlProps>)
    | undefined,
) {
  const enabledYears = years
    .flat()
    .filter(
      (year) =>
        !isYearDisabled(year, minDate, maxDate) &&
        !getYearControlProps?.(year)?.disabled,
    );

  const selectedYear = enabledYears.find(
    (year) => getYearControlProps?.(year)?.selected,
  );

  if (selectedYear) {
    return selectedYear;
  }

  const currentYear = enabledYears.find((year) => dayjs().isSame(year, 'year'));

  if (currentYear) {
    return currentYear;
  }

  return enabledYears[0];
}
