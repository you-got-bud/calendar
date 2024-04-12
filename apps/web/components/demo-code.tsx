import theme from '@/lib/theme.json'
import {cn} from '@/lib/utils'
import {Code} from 'bright'
import {ComponentProps} from 'react'
import {CopyButton} from './copy-button'

Code.theme = theme

export interface DemoCodeProps
  extends Omit<ComponentProps<typeof Code>, 'theme' | 'children' | 'title'> {
  title: string
}

export function DemoCode({code, ...props}: DemoCodeProps) {
  return (
    <div className="relative">
      <Code
        className={cn('text-sm font-mono !m-0 !rounded-b-md', props.className)}
        {...props}
      >
        {code}
      </Code>
      <CopyButton code={code!} fileName={props.title} />
    </div>
  )
}
