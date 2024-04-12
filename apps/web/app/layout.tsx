import {siteConfig} from '@/config/site'
import {cn} from '@/lib/utils'
import {Analytics} from '@vercel/analytics/react'
import type {Metadata} from 'next'
import {ThemeProvider} from 'next-themes'
import {Inter, JetBrains_Mono} from 'next/font/google'
import {Toaster} from 'sonner'
import {Header} from '../components/header'
import './globals.css'

const inter = Inter({subsets: ['latin'], variable: '--font-sans'})
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  creator: 'you-got-bud',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  verification: {
    google: 'OjpJ6M5gGJ1rkHJkEpVIUBhk9vQy88rq1_yCbIyeLUs',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@YouGotBud_',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html
      lang="en"
      className={cn(inter.variable, jetBrainsMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
