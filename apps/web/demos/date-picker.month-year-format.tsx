import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker monthsListFormat="MMMM" yearsListFormat="YY" />
  )
}`

function Demo() {
  return <DatePicker monthsListFormat="MMMM" yearsListFormat="YY" />
}

export const monthYearLabel: DemoType = {
  type: 'code',
  centered: true,
  contained: true,
  component: Demo,
  code: <DemoCode code={code} lang="tsx" title="date-range-picker.tsx" />,
  lang: 'tsx',
}
