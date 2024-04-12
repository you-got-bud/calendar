import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {DatePicker} from '@you-got-bud/calendar'
import dayjs from 'dayjs'

const title = 'date-picker.min-max-date.tsx'
const code = `import {DatePicker} from '@you-got-bud/calendar'

export function MinMaxDateExample() {
  return (
    <DatePicker
      minDate={dayjs().subtract(1, 'week').toDate()}
      maxDate={new Date()}
    />
  )
}

`

function Demo() {
  return (
    <DatePicker
      minDate={dayjs().subtract(1, 'week').toDate()}
      maxDate={new Date()}
    />
  )
}

export const minMaxDate: DemoType = {
  type: 'code',
  contained: true,
  centered: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
