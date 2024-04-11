import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {CalendarWithIndicator} from '../components/calendar-with-indicator'

const code = `'use client'
import {Calendar} from '@you-got-bud/calendar'

export function CalendarWithIndicator() {
  return (
    <Calendar
      static
      renderDay={date => {
        const day = date.getDate()
        return (
          <div className="relative">
            {day === 16 && (
              <div className="absolute -top-4 -right-4 bg-primary flex items-center justify-center rounded-full text-primary-foreground h-5 w-5">
                12
              </div>
            )}
            {day}
          </div>
        )
      }}
    />
  )
}

`

function Demo() {
  return <CalendarWithIndicator />
}

export const staticCalendar: DemoType = {
  type: 'code',
  centered: true,
  component: Demo,
  code: <DemoCode code={code} lang="tsx" title="calendar-static.tsx" />,
  lang: 'tsx',
}
