'use client'
import {DatePicker} from '@you-got-bud/calendar'
import {DatesRangeValue} from '@you-got-bud/calendar/dist/types'
import dayjs from 'dayjs'
import {useMemo, useState} from 'react'
import {Button} from '../components/ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '../components/ui/popover'

export function DatePopover(): JSX.Element {
  const [dates, setDates] = useState<DatesRangeValue>([
    dayjs().toDate(),
    dayjs().add(1, 'week').toDate(),
  ])
  const formattedDates = useMemo(
    () => dates.map(date => dayjs(date).format('MMMM D, YYYY')).join(' - '),
    [dates]
  )
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button>{formattedDates}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <DatePicker type="range" onChange={setDates} value={dates} />
        </PopoverContent>
      </Popover>
    </>
  )
}
