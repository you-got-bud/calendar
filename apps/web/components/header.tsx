'use client'
import {docsConfig} from '@/config/docs'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {CommandMenu} from './command-menu'
import {MobileNav} from './mobile-nav'
import {ThemeMenu} from './theme-menu'

export function Header() {
  const pathname = usePathname()
  return (
    <header className="flex items-center justify-between backdrop-blur-md sticky top-0 z-10 border-b border-border">
      <div className="flex items-center gap-4 container mx-auto flex-1 py-4 justify-between">
        <MobileNav />
        <Link href="/" className="md:flex items-center gap-3 hidden">
          <Image
            width={50}
            height={50}
            src="/logo.png"
            className="dark:invert"
            alt="Logo"
          />
          <div className="text-lg font-mono">@you-got-bud/calendar</div>
        </Link>
        <nav className="md:flex items-center gap-4 hidden">
          {docsConfig.mainNav.map(item => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                item.matchingPaths.some(path => pathname?.startsWith(path))
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 items-center flex-1 max-w-sm ms-auto justify-end">
          <CommandMenu />
          <ThemeMenu />
        </div>
      </div>
    </header>
  )
}
