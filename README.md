# Calendar

A flexible calendar component built on top of tailwindcss with shadcn ui theming

## Installation

```bash
pnpx shadcn-ui init
pnpm add @you-got-bud/calendar
```

### `tailwind.config.js`
```javascript
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './theme/**/*.{ts,tsx}',
    './node_modules/@you-got-bud/calendar/dist/**/*.js'
  ]
```

## Usage

```tsx
'use client'
import {DatePicker, DatesRangeValue} from '@you-got-bud/calendar'
import dayjs from 'dayjs'
import {useMemo, useState} from 'react'
import {Button} from '@/components/ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'

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
```
