import {CodeDemo} from './code-demo'
import {DemoType} from './types'

export function Demo({demo}: {demo: DemoType}) {
  const {component: Component, code} = demo
  return (
    <CodeDemo code={code}>
      <Component />
    </CodeDemo>
  )
}
