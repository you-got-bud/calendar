import {DisplayCalendar} from '@/components/display-calendar'
import {Spotlight} from '@/components/ui/spotlight'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container bg-grid-black/[.02] dark:bg-grid-white/[.02]">
        <section className="text-center flex flex-col justify-center items-center h-full">
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
          <Link
            href="/docs/getting-started"
            className="mt-6 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
              <span>Read the docs</span>
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
          </Link>
        </section>
        <Spotlight className="-top-20 left-0 md:-top-20 md:left-60 hidden dark:block" />
        <Spotlight
          flipped
          className="animate-spotlight-2 top-0 right-0 rotate-180 md:-top-20 md:right-60 hidden dark:block"
        />
      </div>
      <div className="container flex flex-col mt-12">
        <div className="border bg-white/10 dark:bg-black/10 backdrop-blur-md text-black dark:text-white rounded-lg border-border mx-auto p-4">
          <h3 className="text-xl font-bold mb-6">Select a date</h3>
          <DisplayCalendar />
        </div>
      </div>
      <section className="container flex flex-col justify-center items-center py-16 mt-24">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:divide-x divide-border list-none mt-auto">
          <li className="flex flex-col md:px-4">
            <h3 className="text-center text-xl font-bold">
              <Balancer>Server component friendly</Balancer>
            </h3>
            <p className="text-center text-muted-foreground">
              <Balancer>
                All files are exported with the <code>"use client"</code>{' '}
                directive. Letting you import the calendar into your server
                components
              </Balancer>
            </p>
          </li>
          <li className="flex flex-col md:px-4">
            <h3 className="text-center text-xl font-bold">
              Minimal Dependencies
            </h3>
            <p className="text-center text-muted-foreground">
              <Balancer>
                Little to no dependencies. Keeping your package size small
              </Balancer>
            </p>
          </li>
          <li className="flex flex-col md:px-4">
            <h3 className="text-center text-xl font-bold">Customizable</h3>
            <p className="text-center text-muted-foreground">
              <Balancer>
                We rely on 0 inline state based styles. Making every style
                overrideable via a simple tailwind class name. The calendar will
                automatically match your shadcn ui theme
              </Balancer>
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}
