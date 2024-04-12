import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

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
  code: <DemoCode code={code} lang="tsx" title="date-range-picker.tsx" />,
  lang: 'tsx',
}
