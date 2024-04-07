import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { shiftTimezone } from '../shift-timezone';
import { Size, calendar } from '../styles';
import { useDatesContext } from '../use-dates-context';

export type DayStylesNames = 'day';
export type DayCssVariables = {
  day: '--day-size';
};

export interface DayProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  __staticSelector?: string;

  /** Determines which element should be used as root, `'button'` by default, `'div'` if static prop is set */
  static?: boolean;

  /** Date that should be displayed */
  date: Date;

  /** Control width and height of the day, `'sm'` by default */
  size?: Size;

  /** Determines whether the day should be considered to be a weekend, `false` by default */
  weekend?: boolean;

  /** Determines whether the day is outside of the current month, `false` by default */
  outside?: boolean;

  /** Determines whether the day is selected, `false` by default */
  selected?: boolean;

  /** Determines whether the day should not de displayed, `false` by default */
  hidden?: boolean;

  /** Determines whether the day is selected in range, `false` by default */
  inRange?: boolean;

  /** Determines whether the day is first in range selection, `false` by default */
  firstInRange?: boolean;

  /** Determines whether the day is last in range selection, `false` by default */
  lastInRange?: boolean;

  /** Controls day value rendering */
  renderDay?: (date: Date) => React.ReactNode;
}

export const Day = forwardRef<HTMLButtonElement, DayProps>((props, ref) => {
  const {
    date,
    disabled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    size,
    className,
    lastInRange,
    hidden,
    static: isStatic,
    ...others
  } = props;
  const { day } = calendar({ size });

  const ctx = useDatesContext();

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={day({ class: className })}
      data-today={
        dayjs(date).isSame(
          shiftTimezone('add', new Date(), ctx.getTimezone()),
          'day',
        ) || undefined
      }
      data-hidden={hidden || undefined}
      data-disabled={disabled || undefined}
      data-weekend={(!disabled && !outside && weekend) || undefined}
      data-outside={(!disabled && outside) || undefined}
      data-selected={(!disabled && selected) || undefined}
      data-in-range={(inRange && !disabled) || undefined}
      data-first-in-range={(firstInRange && !disabled) || undefined}
      data-last-in-range={(lastInRange && !disabled) || undefined}
      data-static={isStatic || undefined}
      {...others}
    >
      {renderDay?.(date) || date.getDate()}
    </button>
  );
});
Day.displayName = 'Day';
