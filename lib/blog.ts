import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { BlogPost, BlogMetadata } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      content: contentHtml,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      author: data.author || '博客作者',
      coverImage: data.coverImage || '',
      readingTime: calculateReadingTime(content),
      published: data.published ?? true,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  )
  
  return posts
    .filter((post): post is BlogPost => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return readingTime
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
} 