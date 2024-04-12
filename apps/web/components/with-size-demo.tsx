'use client'

import {DatePicker, DatePickerProps} from '@you-got-bud/calendar'
import {useState} from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function WithSizeDemo() {
  const [size, setSize] = useState<NonNullable<DatePickerProps['size']>>('sm')
  return (
    <>
      <DatePicker size={size} />
      <Select
        value={size}
        onValueChange={value =>
          setSize(value as NonNullable<DatePickerProps['size']>)
        }
      >
        <SelectTrigger className="w-[100px] absolute right-4 top-4">
          <SelectValue className="j" placeholder="Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Size</SelectLabel>
            <SelectItem value="xs">xs</SelectItem>
            <SelectItem value="sm">sm</SelectItem>
            <SelectItem value="md">md</SelectItem>
            <SelectItem value="lg">lg</SelectItem>
            <SelectItem value="xl">xl</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
