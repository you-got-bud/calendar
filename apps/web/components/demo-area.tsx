'use client'
import Balancer from 'react-wrap-balancer'
import {cn} from '../lib/utils'

export interface DemoAreaProps {
  className?: string
  centered?: boolean
  desktopOnly?: boolean
  contained?: boolean
  children: React.ReactNode
}
export function DemoArea({
  className,
  desktopOnly,
  contained,
  centered,
  children,
}: DemoAreaProps) {
  return (
    <>
      <div
        className={cn(
          'bg-dot-black/20 dark:bg-dot-white/15',
          className,
          'rounded-t-md flex min-h-40',
          !centered && 'flex-1',
          centered && 'justify-center items-center',
          desktopOnly && 'hidden md:flex'
        )}
      >
        {contained ? (
          <div className="bg-white dark:bg-black border-border border m-6 p-3 rounded-lg">
            {children}
          </div>
        ) : (
          children
        )}
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
