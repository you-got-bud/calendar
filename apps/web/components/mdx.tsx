import {useMDXComponent} from 'next-contentlayer/hooks'

import {calendarHideOutsideDates} from '@/demos/calendar.hide-outside-dates'
import {weekPicker} from '@/demos/calendar.week-picker'
import {datePicker} from '@/demos/date-picker'
import {dateRangePickerInPopover} from '@/demos/date-picker.controlled-date-range'
import {staticCalendar} from 'demos/calendar.indicator'
import {Demo} from './demo'
import {DemoCode} from './demo-code'

const components = {
  Demo,
  Heading: ({title, description}: {title: string; description: string}) => (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold dark:text-white tracking-tighter leading-tight">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  ),
  InitializeShadCnCode: () => (
    <DemoCode
      code={`npx shadcn-ui@latest init`}
      lang="bash"
      title="Initialize Shadcn UI"
    />
  ),
  TailwindContent: () => (
    <DemoCode
      title="tailwind.config.js"
      lang="js"
      code={`module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './theme/**/*.{ts,tsx}',
    '../../node_modules/@you-got-bud/calendar/dist/**/*.js'
  ],
  // ... the rest of your config
}`}
    />
  ),
  InstallCalendarCode: () => (
    <DemoCode
      code={`pnpm add @you-got-bud/calendar`}
      lang="bash"
      title="Install Calendar"
    />
  ),
  CalendarIndicatorDemo: () => <Demo demo={staticCalendar} />,
  WeekPickerDemo: () => <Demo demo={weekPicker} />,
  CalendarHideOutsideDatesDemo: () => <Demo demo={calendarHideOutsideDates} />,
  DatePickerDemo: () => <Demo demo={datePicker} />,
  DateRangeInPopoverDemo: () => <Demo demo={dateRangePickerInPopover} />,
}

interface MdxProps {
  code: string
}

export function Mdx({code}: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx prose prose-headings:scroll-m-20 dark:prose-invert [&_:where(h2+p)]:mt-[-1rem]">
      <Component components={components} />
    </div>
  )
}
