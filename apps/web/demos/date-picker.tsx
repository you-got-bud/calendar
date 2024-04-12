import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const title = 'date-picker.tsx'
const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker />
  )
}`

function Demo() {
  return <DatePicker />
}

export const datePicker: DemoType = {
  type: 'code',
  contained: true,
  centered: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
