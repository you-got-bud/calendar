import {DatePickerLocaleFirstDayOfWeek} from '@/components/date-picker-locale-first-day-of-week'
import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import 'dayjs/locale/es'

const title = 'date-range-picker.locale-weekday-start.tsx'
const code = `'use client'
import 'dayjs/locale/es'
import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker locale="es" firstDayOfWeek={0} />
  )
}`

function Demo() {
  return <DatePickerLocaleFirstDayOfWeek />
}

export const datePickerWeekdayStart: DemoType = {
  desktopOnly: true,
  type: 'code',
  contained: true,
  centered: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
