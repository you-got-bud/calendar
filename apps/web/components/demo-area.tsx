'use client'
import Balancer from 'react-wrap-balancer'
import {cn} from '../lib/utils'

export interface DemoAreaProps {
  className?: string
  centered?: boolean
  desktopOnly?: boolean
  children: React.ReactNode
}
export function DemoArea({
  className,
  desktopOnly,
  centered,
  children,
}: DemoAreaProps) {
  return (
    <>
      <div
        className={cn(
          className,
          'rounded-t-md flex min-h-40',
          !centered && 'flex-1',
          centered && 'justify-center items-center',
          desktopOnly && 'hidden md:flex'
        )}
      >
        {children}
      </div>
      <p
        className={cn(
          'text-center text-sm text-zinc-700 dark:text-zinc-300 hidden p-6',
          desktopOnly && 'flex md:hidden'
        )}
      >
        <Balancer>
          This demo is only available on desktop. Please use a screen with a
          width of 768px or more to view the demo.
        </Balancer>
      </p>
    </>
  )
}
