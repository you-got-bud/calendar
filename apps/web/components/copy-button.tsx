'use client'

import {useCopyToClipboard} from '@/lib/use-copy-to-clipboard'
import {Clipboard} from 'lucide-react'
import {toast} from 'sonner'
import {Button} from './ui/button'

interface CopyButtonProps {
  code: string
}

export function CopyButton({code}: CopyButtonProps) {
  const [value, copy] = useCopyToClipboard()
  function copyText() {
    copy(code)
    toast('Copied to clipboard')
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
