import {siteConfig} from '@/config/site'
import {allDocs} from 'contentlayer/generated'
import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...allDocs.map((doc): MetadataRoute.Sitemap[number] => ({
      url: `${siteConfig.url}${doc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    })),
  ]
}
