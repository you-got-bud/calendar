import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {Calendar} from '@you-got-bud/calendar'

const title = 'calendar-without-outside-dates.tsx'
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
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
