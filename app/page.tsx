import Link from 'next/link'
import { ArrowRight, Github, Mail, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-primary-600">
                个人博客
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">
                博客
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                关于
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            你好，我是 
            <span className="text-primary-600"> 博客作者</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            欢迎来到我的个人博客，这里分享我的技术学习、生活感悟和创作思考。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              查看博客
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            最新文章
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 示例文章卡片 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time>2024年1月1日</time>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  欢迎来到我的博客
                </h3>
                <p className="text-gray-600 mb-4">
                  这是我的第一篇博客文章，介绍了这个博客的主要内容和目标...
                </p>
                <Link
                  href="/blog/welcome"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  阅读全文 →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time>2024年1月5日</time>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Next.js 入门指南
                </h3>
                <p className="text-gray-600 mb-4">
                  本文介绍了 Next.js 的基本概念和如何快速上手开发现代化的 React 应用...
                </p>
                <Link
                  href="/blog/nextjs-guide"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  阅读全文 →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time>2024年1月10日</time>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  技术学习的方法论
                </h3>
                <p className="text-gray-600 mb-4">
                  分享我在学习新技术时的一些方法和心得，希望能对大家有所帮助...
                </p>
                <Link
                  href="/blog/learning-methodology"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  阅读全文 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 个人博客. 保留所有权利.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 