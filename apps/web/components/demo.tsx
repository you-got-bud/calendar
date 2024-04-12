import {CodeDemo} from './code-demo'
import {DemoType} from './types'

export function Demo({demo}: {demo: DemoType}) {
  const {
    component: Component,
    code,
    desktopOnly,
    centered,
    title,
    demoAreaClassName,
    contained,
  } = demo
  return (
    <CodeDemo
      code={code}
      contained={contained}
      desktopOnly={desktopOnly}
      centered={centered}
      demoAreaClassName={demoAreaClassName}
      title={title}
    >
      <Component />
    </CodeDemo>
  )
}
