import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const title = 'date-range-picker.tsx'
const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker type="range" />
  )
}`

function Demo() {
  return <DatePicker type="range" />
}

export const dateRangePicker: DemoType = {
  type: 'code',
  centered: true,
  contained: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
