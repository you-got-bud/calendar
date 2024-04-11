'use client'

import {Button} from '@/components/ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {DatePicker, DatesRangeValue} from '@you-got-bud/calendar'
import dayjs from 'dayjs'
import {CalendarDays} from 'lucide-react'
import {useMemo, useState} from 'react'

export function DateRangeInPopover() {
  const [dateRange, setDateRange] = useState<DatesRangeValue>()
  const label = useMemo(() => {
    if (!dateRange) return 'Select date range'
    return dateRange.map(date => dayjs(date).format('DD MMM YYYY')).join(' - ')
  }, [dateRange])
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <CalendarDays className="w-4 h-4 me-2" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <DatePicker type="range" value={dateRange} onChange={setDateRange} />
      </PopoverContent>
    </Popover>
  )
}
