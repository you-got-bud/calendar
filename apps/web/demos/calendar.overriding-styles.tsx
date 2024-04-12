import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {Calendar} from '@you-got-bud/calendar'

const title = 'calendar-purple-weekends.tsx'
const code = `import {Calendar} from '@you-got-bud/calendar'

export function PurpleWeekends() {
  return (
    <Calendar
      classNames={{
        day: 'data-[weekend]:text-purple-500',
      }}
    />
  )
}

`

function Demo() {
  return (
    <Calendar
      classNames={{
        day: 'data-[weekend]:text-purple-500',
      }}
    />
  )
}

export const purpleWeekendCalendar: DemoType = {
  type: 'code',
  contained: true,
  centered: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
