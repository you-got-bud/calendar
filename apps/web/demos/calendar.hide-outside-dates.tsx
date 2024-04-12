import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {Calendar} from '@you-got-bud/calendar'

const code = `import {Calendar} from '@you-got-bud/calendar'

export function CalendarWithoutOutsideDates() {
  return (
    <Calendar hideOutsideDates />
  )
}`

function Demo() {
  return <Calendar hideOutsideDates />
}

export const calendarHideOutsideDates: DemoType = {
  type: 'code',
  centered: true,
  contained: true,
  component: Demo,
  code: (
    <DemoCode
      code={code}
      lang="tsx"
      title="calendar-without-outside-dates.tsx"
    />
  ),
  lang: 'tsx',
}
