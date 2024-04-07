import {tv} from 'tailwind-variants'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export const calendar = tv({
  slots: {
    monthList: 'table-fixed border-collapse',
    dayList: 'table-fixed border-collapse',
    dayHead: 'text-muted-foreground pb-[calc(var(--spacing)/2)] capitalize',
    day: 'focus-visible:ring-primary data-[first-in-range]:text-primary-foreground data-[static]:user-select-auto data-[outside]:text-muted-foreground data-[selected]:bg-primary text-primary-contrast data-[in-range]:bg-primary/10 data-[first-in-range]:bg-primary data-[in-range]:bg-primary/10 data-[in-range]:data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[in-range]:data-[selected]:hover:bg-primary data-[in-range]:data-[selected]:text-primary-foreground inline-flex h-[var(--size)] w-[var(--size)] cursor-pointer items-center justify-center justify-center rounded-md bg-transparent p-0 text-[calc(var(--size)/2.8)] focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled]:cursor-not-allowed data-[static]:cursor-default data-[first-in-range]:data-[last-in-range]:rounded-md data-[in-range]:rounded-none data-[first-in-range]:rounded-l-md data-[last-in-range]:rounded-r-md data-[weekend]:text-red-500 focus-visible:dark:ring-offset-gray-900 hover:[&:where(:not([data-static],[data-disabled],[data-selected],[data-in-range]))]:bg-gray-100 dark:hover:[&:where(:not([data-static],[data-disabled],[data-selected],[data-in-range]))]:bg-white/10',
    calendarHeaderControl:
      'flex h-[var(--size)] w-[var(--size)] cursor-pointer items-center justify-center rounded-md bg-transparent p-0 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled=true]:cursor-not-allowed dark:hover:bg-white/10 focus-visible:dark:ring-offset-gray-900',
    calendarHeaderLevel:
      'user-select-none flex h-[var(--size)] flex-1 cursor-pointer items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled=true]:cursor-not-allowed dark:hover:bg-white/10 focus-visible:dark:ring-offset-gray-900',
    monthListCell: 'data-[with-spacing=true]:p-[0.5px]',
    monthListControl:
      'text-foreground h-[var(--size)] w-[calc((var(--size)*7/3)+.09375rem)] rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled=true]:cursor-not-allowed dark:hover:bg-white/10 focus-visible:dark:ring-offset-gray-900',
    inputGroup:
      'border-input placeholder:text-muted-foreground has-[:focus-visible]:ring-ring inline-flex h-9 w-full items-center rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium has-[:disabled]:cursor-not-allowed has-[disabled]:opacity-50 has-[:focus-visible]:outline-none has-[:focus-visible]:ring-1',
    yearList: 'table-fixed border-collapse',
    yearListCell: 'data-[with-spacing=true]:p-[0.5px]',
    yearListControl:
      'text-foreground h-[var(--size)] w-[calc((var(--size)*7/3)+.09375rem)] rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled=true]:cursor-not-allowed dark:hover:bg-white/10 focus-visible:dark:ring-offset-gray-900',
    calendarHeader: 'mb-1 flex',
    levelsGroup: 'flex gap-4',
    datePickerControl:
      'focus-visible:ring-primary-500 flex h-[var(--size)] w-[calc((var(--size)*7)/3+1rem)] cursor-pointer appearance-none items-center justify-center rounded-md border-0 bg-transparent p-0 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled=true]:cursor-not-allowed dark:hover:bg-white/10 focus-visible:dark:ring-offset-gray-900',
  },

  variants: {
    size: {
      xs: {dayHead: 'text-xs [--spacing:0.625rem]'},
      sm: {dayHead: 'text-sm [--spacing:0.75rem]'},
      md: {dayHead: 'text-md [--spacing:1rem]'},
      lg: {dayHead: 'text-lg [--spacing:1.125rem]'},
      xl: {dayHead: 'text-xl [--spacing:1.25rem]'},
    },
  },
  compoundSlots: [
    {
      size: 'xs',
      slots: [
        'datePickerControl',
        'calendarHeader',
        'day',
        'calendarHeaderControl',
        'calendarHeaderLevel',
        'monthListControl',
        'yearListControl',
      ],
      class: '[--size:1.875rem]',
    },
    {
      size: 'sm',
      slots: [
        'datePickerControl',
        'calendarHeader',
        'day',
        'calendarHeaderControl',
        'calendarHeaderLevel',
        'monthListControl',
        'yearListControl',
      ],
      class: '[--size:2.25rem]',
    },
    {
      size: 'md',
      slots: [
        'datePickerControl',
        'calendarHeader',
        'day',
        'calendarHeaderControl',
        'calendarHeaderLevel',
        'monthListControl',
        'yearListControl',
      ],
      class: '[--size:2.625rem]',
    },
    {
      size: 'lg',
      slots: [
        'datePickerControl',
        'calendarHeader',
        'day',
        'calendarHeaderControl',
        'calendarHeaderLevel',
        'monthListControl',
        'yearListControl',
      ],
      class: '[--size:3rem]',
    },
    {
      size: 'xl',
      slots: [
        'datePickerControl',
        'calendarHeader',
        'day',
        'calendarHeaderControl',
        'calendarHeaderLevel',
        'monthListControl',
        'yearListControl',
      ],
      class: '[--size:3.375rem]',
    },
  ],
})
