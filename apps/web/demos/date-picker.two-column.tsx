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
  return <DatePicker type="range" numberOfColumns={2} />
}

export const twoColumnDatePicker: DemoType = {
  desktopOnly: true,
  type: 'code',
  contained: true,
  centered: true,
  component: Demo,
  code: <DemoCode code={code} lang="tsx" title="date-range-picker.tsx" />,
  lang: 'tsx',
}
