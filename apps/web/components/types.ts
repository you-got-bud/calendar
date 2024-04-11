import {CodeDemoProps} from './code-demo'

interface DemoComponent {
  component: React.FC<any>
}

export type DemoType = {type: 'code'} & DemoComponent &
  Omit<CodeDemoProps, 'children'>
