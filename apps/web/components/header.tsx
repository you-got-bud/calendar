'use client'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {ThemeMenu} from './theme-menu'

export function Header() {
  const pathname = usePathname()
  return (
    <header className="flex items-center justify-between backdrop-blur-md sticky top-0 z-10 border-b border-border">
      <div className="flex items-center gap-4 container mx-auto flex-1 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            width={50}
            height={50}
            src="/logo.png"
            className="dark:invert"
            alt="Logo"
          />
          <div className="text-lg font-mono hidden md:block">
            @you-got-bud/calendar
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/docs/calendar"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/docs/components')
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Docs
          </Link>
        </nav>
        <ThemeMenu className="ms-auto" />
      </div>
    </header>
  )
}
