import {DemoCode} from '@/components/demo-code'
import {DemoType} from '@/components/types'
import {WeekPicker} from '@/components/week-picker'

const code = `'use client'

import {Calendar} from '@you-got-bud/calendar'
import dayjs from 'dayjs'
import {useState} from 'react'

function getDay(date: Date) {
  const day = date.getDay()
  return day === 0 ? 6 : day - 1
}

function startOfWeek(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - getDay(date) - 1
  )
}

function endOfWeek(date: Date) {
  return dayjs(
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + (6 - getDay(date))
    )
  )
    .endOf('date')
    .toDate()
}

function isInWeekRange(date: Date, value: Date | null) {
  return value
    ? dayjs(date).isBefore(endOfWeek(value)) &&
        dayjs(date).isAfter(startOfWeek(value))
    : false
}

export function WeekPicker() {
  const [hovered, setHovered] = useState<Date | null>(null)
  const [value, setValue] = useState<Date | null>(null)

  return (
    <Calendar
      getDayProps={date => {
        const isHovered = isInWeekRange(date, hovered)
        const isSelected =
          isInWeekRange(date, value) && [1, 0].includes(date.getDay())
        const isInRange = isHovered || isSelected || isInWeekRange(date, value)
        return {
          onMouseEnter: () => setHovered(date),
          onMouseLeave: () => setHovered(null),
          inRange: isInRange,
          firstInRange: isInRange && date.getDay() === 1,
          lastInRange: isInRange && date.getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date),
        }
      }}
    />
  )
}
`

function Demo() {
  return <WeekPicker />
}

export const weekPicker: DemoType = {
  type: 'code',
  centered: true,
  contained: true,
  component: Demo,
  code: <DemoCode lang="tsx" title="week-picker.tsx" code={code} />,
  lang: 'tsx',
}
