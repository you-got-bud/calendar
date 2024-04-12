import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const title = 'date-picker-default-date.tsx'
const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker defaultDate={new Date(1999, 9, 5)} />
  )
}`

function Demo() {
  return <DatePicker defaultDate={new Date(1999, 9, 5)} />
}

export const datePickerDefaultDate: DemoType = {
  type: 'code',
  centered: true,
  contained: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
