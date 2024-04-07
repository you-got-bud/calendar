import type {CalendarLevel} from '../types'

export function clamp(
  value: number,
  min: number | undefined,
  max: number | undefined
) {
  if (min === undefined && max === undefined) {
    return value
  }

  if (min !== undefined && max === undefined) {
    return Math.max(value, min)
  }

  if (min === undefined && max !== undefined) {
    return Math.min(value, max)
  }

  return Math.min(Math.max(value, min!), max!)
}
// 0 – month, 1 – year, 2 – decade;
type LevelNumber = 0 | 1 | 2

function levelToNumber(
  level: CalendarLevel | undefined,
  fallback: LevelNumber | undefined
): LevelNumber {
  if (!level) {
    return fallback || 0
  }

  return level === 'month' ? 0 : level === 'year' ? 1 : 2
}

function levelNumberToLevel(
  levelNumber: LevelNumber | undefined
): CalendarLevel {
  return levelNumber === 0 ? 'month' : levelNumber === 1 ? 'year' : 'decade'
}

export function clampLevel(
  level: CalendarLevel | undefined,
  minLevel: CalendarLevel | undefined,
  maxLevel: CalendarLevel | undefined
): CalendarLevel {
  return levelNumberToLevel(
    clamp(
      levelToNumber(level, 0),
      levelToNumber(minLevel, 0),
      levelToNumber(maxLevel, 2)
    ) as LevelNumber
  )
}
