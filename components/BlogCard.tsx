import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { BlogPost } from '@/types/blog'
import { Clock, Calendar, Tag } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = formatDistanceToNow(new Date(post.date), {
    addSuffix: true,
    locale: zhCN
  })

  return (
    <article className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
      featured ? 'md:col-span-2' : ''
    }`}>
      {post.coverImage && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} 分钟阅读</span>
            </div>
          )}
        </div>

        <h3 className={`font-semibold text-gray-900 mb-2 ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-primary-600 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-gray-400" />
            <div className="flex gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            阅读全文 →
          </Link>
        </div>
      </div>
    </article>
  )
} 