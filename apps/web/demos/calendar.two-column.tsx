import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'

const code = `import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker type="range" numberOfColumns={2} />
  )
}`

function Demo() {
  return (
    <div className="mx-auto py-6">
      <DatePicker type="range" numberOfColumns={2} />
    </div>
  )
}

export const twoColumnDatePicker: DemoType = {
  desktopOnly: true,
  type: 'code',
  centered: true,
  component: Demo,
  code: <DemoCode code={code} lang="tsx" title="date-range-picker.tsx" />,
  lang: 'tsx',
}
