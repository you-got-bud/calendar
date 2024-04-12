import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const title = 'date-range-picker.allow-single-date.tsx'
const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker type="range" allowSingleDateInRange />
  )
}`

function Demo() {
  return <DatePicker type="range" allowSingleDateInRange />
}

export const singleDateInRange: DemoType = {
  type: 'code',
  centered: true,
  contained: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
