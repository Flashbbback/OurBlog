export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  author: string
  coverImage?: string
  readingTime?: number
  published: boolean
}

export interface BlogMetadata {
  title: string
  date: string
  excerpt: string
  tags: string[]
  author: string
  coverImage?: string
  published: boolean
}

export interface Author {
  name: string
  bio: string
  avatar?: string
  social?: {
    twitter?: string
    github?: string
    email?: string
    website?: string
  }
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  author: Author
  social: {
    twitter?: string
    github?: string
    email?: string
  }
} 