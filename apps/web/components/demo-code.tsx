import theme from '@/lib/theme.json'
import {cn} from '@/lib/utils'
import {Code} from 'bright'
import {ComponentProps} from 'react'
import {CopyButton} from './copy-button'

Code.theme = theme

export type DemoCodeProps = Omit<
  ComponentProps<typeof Code>,
  'theme' | 'children'
>

export function DemoCode({code, ...props}: DemoCodeProps) {
  return (
    <div className="relative">
      <Code className={cn('text-sm font-mono', props.className)} {...props}>
        {code}
      </Code>
      <CopyButton code={code!} />
    </div>
  )
}
