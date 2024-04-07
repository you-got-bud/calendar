import React, { DetailedHTMLProps, forwardRef } from 'react';

export interface PickerControlProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  __staticSelector?: string;

  className?: string;
  /** Control children */
  children?: React.ReactNode;

  /** Determines whether control should be disabled */
  disabled?: boolean;

  /** Determines whether control should have selected styles */
  selected?: boolean;

  /** Determines whether control is selected in range */
  inRange?: boolean;

  /** Determines whether control is first in range selection */
  firstInRange?: boolean;

  /** Determines whether control is last in range selection */
  lastInRange?: boolean;

  /** Component size */
}

export const PickerControl = forwardRef<HTMLButtonElement, PickerControlProps>(
  (props, ref) => {
    const {
      className,
      firstInRange,
      lastInRange,
      inRange,
      __staticSelector,
      selected,
      disabled,
      ...others
    } = props;

    return (
      <button
        ref={ref}
        data-picker-control
        className={className}
        data-selected={(selected && !disabled) || undefined}
        data-disabled={disabled || undefined}
        data-in-range={(inRange && !disabled && !selected) || undefined}
        data-first-in-range={(firstInRange && !disabled) || undefined}
        data-last-in-range={(lastInRange && !disabled) || undefined}
        disabled={disabled}
        {...others}
      />
    );
  },
);

PickerControl.displayName = 'PickerControl';
