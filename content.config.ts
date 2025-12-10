import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        
      })
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        order: z.number(),
        title: z.string(),
        shortDescription: z.string(),
        description: z.string(),
        image: z.string(),
        preview: z.string(),
        isDraft: z.boolean()
      })
    })
  }
})