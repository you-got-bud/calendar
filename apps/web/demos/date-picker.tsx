import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker />
  )
}`

function Demo() {
  return (
    <div className="mx-auto py-6">
      <DatePicker />
    </div>
  )
}

export const datePicker: DemoType = {
  type: 'code',
  centered: true,
  component: Demo,
  code: <DemoCode code={code} lang="tsx" title="date-picker.tsx" />,
  lang: 'tsx',
}
