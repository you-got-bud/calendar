import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {CalendarWithIndicator} from '../components/calendar-with-indicator'

const title = 'calendar-static.tsx'
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
              <div className="absolute -top-4 -right-4 bg-primary flex items-center justify-center rounded-full text-primary-foreground h-[1.35rem] w-[1.35rem] text-xs">
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
  contained: true,
  centered: true,
  title,
  component: Demo,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
