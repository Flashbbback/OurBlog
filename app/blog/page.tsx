import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/types/blog'
import { Search, Filter } from 'lucide-react'

// 示例数据 - 在实际应用中，这将从 API 或 CMS 获取
const samplePosts: BlogPost[] = [
  {
    slug: 'welcome-to-my-blog',
    title: '欢迎来到我的博客',
    date: '2024-01-01',
    excerpt: '这是我的第一篇博客文章，介绍了这个博客的主要内容和目标。我希望通过这个平台分享我的技术学习经验、生活感悟和创作思考。',
    content: '',
    tags: ['博客', '介绍', '个人'],
    author: '博客作者',
    readingTime: 3,
    published: true
  },
  {
    slug: 'nextjs-guide',
    title: 'Next.js 入门指南',
    date: '2024-01-05',
    excerpt: '本文介绍了 Next.js 的基本概念和如何快速上手开发现代化的 React 应用。包括路由、服务端渲染、静态生成等核心功能。',
    content: '',
    tags: ['Next.js', 'React', '前端', '教程'],
    author: '博客作者',
    readingTime: 8,
    published: true
  },
  {
    slug: 'learning-methodology',
    title: '技术学习的方法论',
    date: '2024-01-10',
    excerpt: '分享我在学习新技术时的一些方法和心得，包括如何制定学习计划、如何实践和如何保持持续学习的动力。',
    content: '',
    tags: ['学习', '方法论', '技术', '成长'],
    author: '博客作者',
    readingTime: 6,
    published: true
  },
  {
    slug: 'react-performance',
    title: 'React 性能优化最佳实践',
    date: '2024-01-15',
    excerpt: '深入探讨 React 应用的性能优化策略，包括组件优化、状态管理、代码分割和渲染优化等方面的实践经验。',
    content: '',
    tags: ['React', '性能优化', '前端'],
    author: '博客作者',
    readingTime: 12,
    published: true
  },
  {
    slug: 'life-reflections',
    title: '2024年上半年的生活感悟',
    date: '2024-01-20',
    excerpt: '回顾上半年的生活点滴，分享一些个人成长的思考和对未来的规划。包括工作、学习、健康和人际关系等方面。',
    content: '',
    tags: ['生活', '感悟', '成长', '反思'],
    author: '博客作者',
    readingTime: 5,
    published: true
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              博客文章
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              分享技术学习、生活感悟和创作思考的文章集合
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索文章..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">所有分类</option>
              <option value="tech">技术</option>
              <option value="life">生活</option>
              <option value="thinking">思考</option>
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <BlogCard 
              key={post.slug} 
              post={post} 
              featured={index === 0}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              上一页
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-primary-600 rounded-lg">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              下一页
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
} 