import { notFound } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'

// 示例数据 - 在实际应用中，这将从 API 或文件系统获取
const samplePost = {
  slug: 'welcome-to-my-blog',
  title: '欢迎来到我的博客',
  date: '2024-01-01',
  excerpt: '这是我的第一篇博客文章，介绍了这个博客的主要内容和目标。',
  content: `
# 欢迎来到我的博客

你好！欢迎来到我的个人博客。这是我在这个平台上的第一篇文章，我想借此机会介绍一下这个博客的主要内容和我的目标。

## 关于这个博客

这个博客是我分享技术学习、生活感悟和创作思考的地方。我希望通过文字记录我的成长历程，同时也能为访问者提供有价值的内容。

### 主要内容

1. **技术分享**
   - 前端开发技术
   - 后端开发经验
   - 工具和效率提升
   - 项目经验总结

2. **生活感悟**
   - 个人成长心得
   - 读书笔记
   - 旅行见闻
   - 摄影作品

3. **创作思考**
   - 写作技巧
   - 创作灵感
   - 设计理念
   - 用户体验

## 我的目标

通过这个博客，我希望能够：

- 记录和分享我的学习过程
- 帮助其他开发者解决问题
- 建立一个技术交流的平台
- 保持持续学习和创作的动力

## 技术栈

这个博客使用了以下技术：

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Markdown** - 内容管理
- **Vercel** - 部署平台

## 联系方式

如果你对我的文章感兴趣，或者想要交流技术问题，欢迎通过以下方式联系我：

- 邮箱：your-email@example.com
- GitHub：[你的GitHub](https://github.com/yourusername)
- Twitter：[@yourusername](https://twitter.com/yourusername)

感谢你的阅读！希望你能在这里找到有价值的内容。
`,
  tags: ['博客', '介绍', '个人'],
  author: '博客作者',
  readingTime: 3,
  published: true
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // 在实际应用中，这里应该根据 slug 从数据源获取文章内容
  const post = samplePost
  
  if (!post) {
    notFound()
  }

  const formattedDate = formatDistanceToNow(new Date(post.date), {
    addSuffix: true,
    locale: zhCN
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              返回博客
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} 分钟阅读</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>作者: {post.author}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <Share2 className="h-4 w-4" />
                分享文章
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {/* 在实际应用中，这里应该使用 markdown 解析器 */}
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => 
                  line.startsWith('# ') ? `<h1 class="text-3xl font-bold text-gray-900 mb-4 mt-8">${line.slice(2)}</h1>` :
                  line.startsWith('## ') ? `<h2 class="text-2xl font-bold text-gray-900 mb-3 mt-6">${line.slice(3)}</h2>` :
                  line.startsWith('### ') ? `<h3 class="text-xl font-bold text-gray-900 mb-2 mt-4">${line.slice(4)}</h3>` :
                  line.startsWith('- ') ? `<li class="mb-1">${line.slice(2)}</li>` :
                  line.match(/^\d+\./) ? `<li class="mb-1">${line.replace(/^\d+\.\s*/, '')}</li>` :
                  line.startsWith('**') && line.endsWith('**') ? `<strong class="font-semibold">${line.slice(2, -2)}</strong>` :
                  line.trim() === '' ? '<br>' :
                  `<p class="mb-4">${line}</p>`
                ).join('') }}
              />
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              返回博客列表
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">上一篇</span>
            <Link 
              href="#" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              下一篇文章 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 