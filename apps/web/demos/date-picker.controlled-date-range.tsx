import {DateRangeInPopover} from '@/components/date-range-in-popover'
import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'

const title = 'date-range-picker-in-popover.tsx'
const code = `'use client'

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

`

function Demo() {
  return (
    <div className="py-6 m-auto">
      <DateRangeInPopover />
    </div>
  )
}

export const dateRangePickerInPopover: DemoType = {
  type: 'code',
  centered: true,
  component: Demo,
  title,
  code: <DemoCode code={code} lang="tsx" title={title} />,
  lang: 'tsx',
}
