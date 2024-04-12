import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const title = 'date-picker-multiple.tsx'
const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker type="multiple" />
  )
}`

function Demo() {
  return <DatePicker type="multiple" />
}

export const datePickerMultiple: DemoType = {
  type: 'code',
  centered: true,
  contained: true,
  title,
  component: Demo,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
