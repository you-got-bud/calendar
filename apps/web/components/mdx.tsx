import {useMDXComponent} from 'next-contentlayer/hooks'

import {calendarHideOutsideDates} from '@/demos/calendar.hide-outside-dates'
import {weekPicker} from '@/demos/calendar.week-picker'
import {staticCalendar} from 'demos/calendar.indicator'
import {Demo} from './demo'

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
  CalendarIndicatorDemo: () => <Demo demo={staticCalendar} />,
  WeekPickerDemo: () => <Demo demo={weekPicker} />,
  CalendarHideOutsideDatesDemo: () => <Demo demo={calendarHideOutsideDates} />,
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
