'use client'
import {cn} from '../lib/utils'

export interface DemoAreaProps {
  className?: string
  centered?: boolean
  children: React.ReactNode
}
export function DemoArea({className, centered, children}: DemoAreaProps) {
  return (
    <div
      className={cn(
        className,
        'rounded-t-md flex min-h-40',
        !centered && 'flex-1',
        centered && 'flex justify-center items-center'
      )}
    >
      {children}
    </div>
  )
}
