'use client'

import {DatePicker} from '@you-got-bud/calendar'
import 'dayjs/locale/es'

export function DatePickerLocaleFirstDayOfWeek() {
  return <DatePicker locale="es" firstDayOfWeek={0} />
}
