'use client'

import {useMediaQuery} from '@/lib/use-media-query'
import {DatePicker} from '@you-got-bud/calendar'
import dayjs from 'dayjs'

export function DisplayCalendar() {
  const isDesktop = useMediaQuery('(min-width: 640px)')
  return (
    <DatePicker
      numberOfColumns={isDesktop ? 2 : 1}
      type="range"
      defaultValue={
        [
          dayjs().subtract(1, 'week').subtract(3, 'days').toDate(),
          dayjs().toDate(),
        ] as const
      }
    />
  )
}
