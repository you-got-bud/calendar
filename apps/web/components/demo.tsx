import {CodeDemo} from './code-demo'
import {DemoType} from './types'

export function Demo({demo}: {demo: DemoType}) {
  const {
    component: Component,
    code,
    desktopOnly,
    centered,
    demoAreaClassName,
  } = demo
  return (
    <CodeDemo
      code={code}
      desktopOnly={desktopOnly}
      centered={centered}
      demoAreaClassName={demoAreaClassName}
    >
      <Component />
    </CodeDemo>
  )
}
