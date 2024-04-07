import * as React from 'react';

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CalendarLevel = 'month' | 'year' | 'decade';

export interface ControlKeydownPayload {
  cellIndex: number;
  rowIndex: number;
  date: Date;
}

export interface ControlsGroupSettings {
  /** Called when control is clicked with event and date */
  __onControlClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    date: Date,
  ) => void;

  /** Called when mouse enters control with event and date, used for ranges */
  __onControlMouseEnter?: (
    event: React.MouseEvent<HTMLButtonElement>,
    date: Date,
  ) => void;

  /** Called when any keydown event is registered on control, used for arrows navigation */
  __onControlKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload,
  ) => void;

  /** Assigns ref of every control based on its position in the table, used for arrows navigation */
  __getControlRef?: (
    rowIndex: number,
    cellIndex: number,
    node: HTMLButtonElement,
  ) => void;

  /** Minimum possible date */
  minDate?: Date;

  /** Maximum possible date */
  maxDate?: Date;

  /** dayjs locale, defaults to value defined in DatesProvider */
  locale?: string;
}

export type DateValue = Date | null;
export type DatesRangeValue = [DateValue, DateValue];
export type DatePickerType = 'default' | 'multiple' | 'range';

export type DatePickerValue<Type extends DatePickerType = 'default'> =
  Type extends 'range'
    ? DatesRangeValue
    : Type extends 'multiple'
      ? Date[]
      : DateValue;

export interface PickerBaseProps<Type extends DatePickerType = 'default'> {
  /** Picker type: range, multiple or default */
  type?: DatePickerType | Type;

  /** Value for controlled component */
  value?: DatePickerValue<Type>;

  /** Default value for uncontrolled component */
  defaultValue?: DatePickerValue<Type>;

  /** Called when value changes */
  onChange?: (value: DatePickerValue<Type>) => void;

  /** Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" */
  allowDeselect?: Type extends 'default' ? boolean : never;

  /** Determines whether single year can be selected as range, applicable only when type="range" */
  allowSingleDateInRange?: Type extends 'range' ? boolean : never;
}
