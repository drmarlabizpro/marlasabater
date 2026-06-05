import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://marlasabater.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ecosystem`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ecosystem/enterprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ecosystem/corporation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ecosystem/group`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/ecosystem/flavor`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/ecosystem/legacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/ecosystem/marvic`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/ecosystem/psg`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/ministry`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
