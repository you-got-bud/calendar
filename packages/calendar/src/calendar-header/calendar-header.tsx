import {ChevronLeft, ChevronRight} from 'lucide-react'
import React, {forwardRef} from 'react'
import {cn} from '../cn'
import {Size, calendar} from '../styles'

export type CalendarHeaderStylesNames =
  | 'calendarHeader'
  | 'calendarHeaderControl'
  | 'calendarHeaderLevel'
  | 'calendarHeaderControlIcon'

export interface CalendarHeaderSettings {
  classNames?: Partial<Record<CalendarHeaderStylesNames, string>>
  /** Change next icon */
  nextIcon?: React.ReactNode

  /** Change previous icon */
  previousIcon?: React.ReactNode

  /** aria-label for next button */
  nextLabel?: string

  /** aria-label for previous button */
  previousLabel?: string

  /** Called when next button is clicked */
  onNext?: () => void

  /** Called when previous button is clicked */
  onPrevious?: () => void

  /** Called when level button is clicked */
  onLevelClick?: () => void

  /** Determines whether next control should be disabled, defaults to true */
  nextDisabled?: boolean

  /** Determines whether previous control should be disabled, defaults to true */
  previousDisabled?: boolean

  /** Determines whether next level button should be enabled, defaults to true */
  hasNextLevel?: boolean

  /** Determines whether next control should be rendered, defaults to true */
  withNext?: boolean

  /** Determines whether previous control should be rendered, defaults to true */
  withPrevious?: boolean

  /** Component size */
  size?: Size
}

export interface CalendarHeaderProps
  extends CalendarHeaderSettings,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  __staticSelector?: string

  /** Label displayed between next and previous buttons */
  label: React.ReactNode

  /** aria-label for level control */
  levelControlAriaLabel?: string
}

const defaultProps: Partial<CalendarHeaderProps> = {
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true,
}

export const CalendarHeader = forwardRef<HTMLDivElement, CalendarHeaderProps>(
  (props, ref) => {
    const {
      className,
      style,
      nextIcon,
      previousIcon,
      classNames,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      label,
      nextDisabled = defaultProps.nextDisabled,
      previousDisabled = defaultProps.previousDisabled,
      hasNextLevel = defaultProps.hasNextLevel,
      levelControlAriaLabel,
      withNext = defaultProps.withNext,
      withPrevious = defaultProps.withPrevious,
      ...others
    } = props
    const {calendarHeader, calendarHeaderControl, calendarHeaderLevel} =
      calendar({
        size: props.size,
      })

    return (
      <div
        className={calendarHeader({class: classNames?.calendarHeader})}
        ref={ref}
        {...others}
      >
        {withPrevious && (
          <button
            className={calendarHeaderControl({
              class: classNames?.calendarHeaderControl,
            })}
            data-direction="previous"
            aria-label={previousLabel}
            onClick={onPrevious}
            disabled={previousDisabled}
            data-disabled={previousDisabled || undefined}
            tabIndex={previousDisabled ? -1 : 0}
          >
            {previousIcon || (
              <ChevronLeft
                className={cn(classNames?.calendarHeaderControlIcon, 'w-[45%]')}
                data-direction="previous"
              />
            )}
          </button>
        )}

        <button
          onClick={hasNextLevel ? onLevelClick : undefined}
          className={calendarHeaderLevel({
            class: classNames?.calendarHeaderLevel,
          })}
          disabled={!hasNextLevel}
          data-static={!hasNextLevel || undefined}
          aria-label={levelControlAriaLabel}
          tabIndex={!hasNextLevel ? -1 : 0}
        >
          {label}
        </button>

        {withNext && (
          <button
            data-direction="next"
            aria-label={nextLabel}
            onClick={onNext}
            className={calendarHeaderControl({
              class: classNames?.calendarHeaderControl,
            })}
            disabled={nextDisabled}
            data-disabled={nextDisabled || undefined}
            tabIndex={nextDisabled ? -1 : 0}
          >
            {nextIcon || (
              <ChevronRight
                className={cn(classNames?.calendarHeaderControlIcon, 'w-[45%]')}
                data-direction="next"
              />
            )}
          </button>
        )}
      </div>
    )
  }
)

CalendarHeader.displayName = 'CalendarHeader'
