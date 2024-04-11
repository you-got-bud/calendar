import {allDocs} from 'contentlayer/generated'
import {ChevronRight} from 'lucide-react'
import {notFound} from 'next/navigation'

import {Mdx} from '@/components/mdx'
import {cn} from '@/lib/utils'
import type {Metadata} from 'next'
import Balancer from 'react-wrap-balancer'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({params}: DocPageProps) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find(doc => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({params})

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      creator: '@you-got-bud',
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  return allDocs.map(doc => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocPage({params}: DocPageProps) {
  const doc = await getDocFromParams({params})

  if (!doc) {
    notFound()
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
      </div>
    </main>
  )
}
