import {ReactNode} from 'react'
import {DemoArea, DemoAreaProps} from './demo-area'
import {DemoCodeProps} from './demo-code'
import {DemoRoot} from './demo-root'

export interface CodeDemoProps
  extends Omit<DemoCodeProps, 'code'>,
    DemoAreaProps {
  demoAreaClassName?: string
  desktopOnly?: boolean
  code: ReactNode
}

export function CodeDemo({
  demoAreaClassName,
  children,
  contained,
  desktopOnly,
  centered,
  ...codeProps
}: CodeDemoProps) {
  return (
    <DemoRoot>
      <DemoArea
        contained={contained}
        desktopOnly={desktopOnly}
        centered={centered}
        className={demoAreaClassName}
      >
        {children}
      </DemoArea>
      {codeProps.code}
    </DemoRoot>
  )
}
