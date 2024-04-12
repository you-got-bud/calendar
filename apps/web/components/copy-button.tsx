'use client'

import {useCopyToClipboard} from '@/lib/use-copy-to-clipboard'
import {track} from '@vercel/analytics/react'
import {Clipboard, ClipboardCheck} from 'lucide-react'
import {toast} from 'sonner'
import {Button} from './ui/button'

interface CopyButtonProps {
  code: string
  fileName?: string
}

export function CopyButton({code, fileName}: CopyButtonProps) {
  const [value, copy] = useCopyToClipboard()
  function copyText() {
    track('Copied Code', {
      fileName: fileName || 'code',
    })
    copy(code)
    toast(
      <div className="flex items-center">
        <ClipboardCheck className="h-4 w-4 me-2" />
        Copied to clipboard
      </div>
    )
  }
  return (
    <Button
      size="icon"
      variant="outline"
      className="absolute top-4 right-4 z-20 bg-white/20 border-transparent text-white"
      onClick={copyText}
    >
      <Clipboard className="h-4 w-4" />
    </Button>
  )
}
