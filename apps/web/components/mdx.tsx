import {useMDXComponent} from 'next-contentlayer/hooks'

import {calendarHideOutsideDates} from '@/demos/calendar.hide-outside-dates'
import {purpleWeekendCalendar} from '@/demos/calendar.overriding-styles'
import {weekPicker} from '@/demos/calendar.week-picker'
import {datePicker} from '@/demos/date-picker'
import {datePickerWeekdayStart} from '@/demos/date-picker-weekday-start'
import {dateRangePickerInPopover} from '@/demos/date-picker.controlled-date-range'
import {dateRangePicker} from '@/demos/date-picker.date-range'
import {datePickerInForm} from '@/demos/date-picker.in-form'
import {datePickerLocale} from '@/demos/date-picker.locale'
import {minMaxDate} from '@/demos/date-picker.min-max-date'
import {monthYearLabel} from '@/demos/date-picker.month-year-format'
import {datePickerMultiple} from '@/demos/date-picker.multiple'
import {singleDateInRange} from '@/demos/date-picker.single-date-range'
import {twoColumnDatePicker} from '@/demos/date-picker.two-column'
import {withSize} from '@/demos/date-picker.with-size'
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
    './node_modules/@you-got-bud/calendar/dist/**/*.js'
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
  MinMaxDateDemo: () => <Demo demo={minMaxDate} />,
  PurpleWeekendCalendar: () => <Demo demo={purpleWeekendCalendar} />,
  DatePickerMultipleDemo: () => <Demo demo={datePickerMultiple} />,
  MonthYearFormatDemo: () => <Demo demo={monthYearLabel} />,
  DateRangeDemo: () => <Demo demo={dateRangePicker} />,
  DateRangeInPopoverDemo: () => <Demo demo={dateRangePickerInPopover} />,
  DatePickerTwoColumnDemo: () => <Demo demo={twoColumnDatePicker} />,
  DatePickerInFormDemo: () => <Demo demo={datePickerInForm} />,
  DatePickerWithSizeDemo: () => <Demo demo={withSize} />,
  DatePickerSingleDateInRangeDemo: () => <Demo demo={singleDateInRange} />,
  DatePickerLocaleDemo: () => <Demo demo={datePickerLocale} />,
  DatePickerLocaleWeekdayStartDemo: () => (
    <Demo demo={datePickerWeekdayStart} />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({code}: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx prose prose-headings:scroll-m-32 dark:prose-invert [&_:where(h2+p)]:mt-[-1rem]">
      <Component components={components} />
    </div>
  )
}
