'use client'
import {Calendar} from '@you-got-bud/calendar'

export function CalendarWithIndicator() {
  return (
    <div className="mx-auto max-w-xs my-4">
      <Calendar
        static
        renderDay={date => {
          const day = date.getDate()
          return (
            <div className="relative">
              {day === 16 && (
                <div className="absolute -top-4 -right-4 bg-primary flex items-center justify-center rounded-full text-primary-foreground h-[1.35rem] w-[1.35rem] text-xs">
                  12
                </div>
              )}
              {day}
            </div>
          )
        }}
      />
    </div>
  )
}
