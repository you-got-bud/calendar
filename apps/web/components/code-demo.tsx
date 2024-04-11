import {ReactNode} from 'react'
import {DemoArea, DemoAreaProps} from './demo-area'
import {DemoCodeProps} from './demo-code'
import {DemoRoot} from './demo-root'

export interface CodeDemoProps
  extends Omit<DemoCodeProps, 'code'>,
    DemoAreaProps {
  demoAreaClassName?: string
  code: ReactNode
}

export function CodeDemo({
  demoAreaClassName,
  children,
  centered,
  ...codeProps
}: CodeDemoProps) {
  return (
    <DemoRoot>
      <DemoArea centered={centered} className={demoAreaClassName}>
        {children}
      </DemoArea>
      {codeProps.code}
    </DemoRoot>
  )
}
