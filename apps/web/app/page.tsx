import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Spotlight} from '@/components/ui/spotlight'
import {DatePicker} from '@you-got-bud/calendar'
import Balancer from 'react-wrap-balancer'

export default function Page() {
  return (
    <div className="container bg-grid-black/[.02] dark:bg-grid-white/[.02] min-h-screen">
      <section className="text-center flex flex-col justify-center items-center ">
        <h2 className="mt-16 bg-gradient-to-br from-zinc-500 to-zinc-900 dark:from-zinc-200 dark:to-zinc-500 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent md:text-4xl lg:text-6xl lg:leading-tight mb-3 lg:mt-40 md:mt-24">
          <Balancer>
            A fast, flexible, server component friendly date-picker for react.
          </Balancer>
        </h2>
        <p className="text-center text-lg text-gray-500 md:text-xl lg:text-2xl">
          <Balancer>
            Themed with @shadcn/ui and customizable down to the last element.
          </Balancer>
        </p>
        <Popover>
          <PopoverTrigger asChild>
            <button className="mt-6 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                <span>Try it out</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <DatePicker />
          </PopoverContent>
        </Popover>
      </section>
      <Spotlight className="-top-20 left-0 md:-top-20 md:left-60 hidden dark:block" />
      <Spotlight
        flipped
        className="animate-spotlight-2 top-0 right-0 rotate-180 md:-top-20 md:right-60 hidden dark:block"
      />
    </div>
  )
}
