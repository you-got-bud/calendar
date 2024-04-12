'use client'

import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {DatePicker} from '@you-got-bud/calendar'
import dayjs from 'dayjs'
import {ChevronDown} from 'lucide-react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

export const formSchema = z.object({
  birthday: z.nullable(z.date()),
})

export function DatePickerInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      birthday: new Date(1990, 0, 1),
    },
  })

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(data => alert(JSON.stringify(data)))}
      >
        <FormField
          control={form.control}
          name="birthday"
          render={({field}) => (
            <FormItem className="flex flex-col">
              <FormLabel htmlFor="birthday">Birthday</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={
                        'relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-64'
                      }
                    >
                      {form.watch('birthday')
                        ? dayjs(form.watch('birthday')).format('DD/MM/YYYY')
                        : 'Select a date'}
                      <ChevronDown className="h-4 w-4 ms-auto" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <DatePicker
                      allowDeselect
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
