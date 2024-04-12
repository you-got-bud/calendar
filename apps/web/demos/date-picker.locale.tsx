import {DatePickerLocale} from '@/components/date-picker-locale'
import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'

const title = 'date-range-picker.locale.tsx'
const code = `'use client'
import 'dayjs/locale/es'
import {DatePicker} from '@you-got-bud/calendar'

export function DatePicker() {
  return (
    <DatePicker locale="es" />
  )
}`

function Demo() {
  return <DatePickerLocale />
}

export const datePickerLocale: DemoType = {
  type: 'code',
  contained: true,
  centered: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
