import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollNav from '@/components/ScrollNav'

export default function Home() {
  const sections = [
    { id: 'hero', label: '首页' },
    { id: 'blog', label: '最新文章' },
    { id: 'about', label: '关于我' },
    { id: 'contact', label: '联系我' }
  ]

  return (
    <div className="scroll-smooth overflow-y-auto snap-y snap-mandatory h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/img/texture-rain-bg.png" 
          className="w-full h-full object-cover opacity-30" 
          alt="背景"
        />
      </div>

      {/* Section 1: Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center snap-start relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-indigo-900/50 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto text-center px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            你好，我是 
            <span className="text-blue-300 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"> 博客作者</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            欢迎来到我的个人博客，这里分享我的技术学习、生活感悟和创作思考。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 text-white rounded-lg backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              查看博客
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-white rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              了解更多
            </Link>
          </div>
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <p className="text-gray-300 text-sm mb-2">向下滚动探索更多</p>
            <ChevronDown className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </section>

      {/* Section 2: Recent Posts */}
      <section id="blog" className="h-screen flex items-center justify-center snap-start relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-slate-900/80 to-gray-800/80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-4xl font-bold text-white mb-16 text-center drop-shadow-lg">
            最新文章
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[60vh] overflow-y-auto scrollbar-hide">
            {/* 示例文章卡片 */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <time>2024年1月1日</time>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  欢迎来到我的博客
                </h3>
                <p className="text-gray-200 mb-4">
                  这是我的第一篇博客文章，介绍了这个博客的主要内容和目标...
                </p>
                <Link
                  href="/blog/welcome"
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  阅读全文 →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <time>2024年1月5日</time>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Next.js 入门指南
                </h3>
                <p className="text-gray-200 mb-4">
                  本文介绍了 Next.js 的基本概念和如何快速上手开发现代化的 React 应用...
                </p>
                <Link
                  href="/blog/nextjs-guide"
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  阅读全文 →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <time>2024年1月10日</time>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  技术学习的方法论
                </h3>
                <p className="text-gray-200 mb-4">
                  分享我在学习新技术时的一些方法和心得，希望能对大家有所帮助...
                </p>
                <Link
                  href="/blog/learning-methodology"
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  阅读全文 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: About Preview */}
      <section id="about" className="h-screen flex items-center justify-center snap-start relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-indigo-900/60 to-blue-900/60 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-20">
          <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
            关于我
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 mb-8">
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              我是一名热爱技术的开发者，专注于前端开发和用户体验设计。
              在这里，我分享我的技术学习心得、项目经验和生活感悟。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full border border-blue-300/20">
                React
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full border border-purple-300/20">
                Next.js
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-200 rounded-full border border-green-300/20">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-200 rounded-full border border-yellow-300/20">
                Tailwind CSS
              </span>
            </div>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-3 text-white rounded-lg backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/20"
          >
            了解更多关于我
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section id="contact" className="h-screen flex items-center justify-center snap-start relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/80 to-black/80 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-20">
          <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
            联系我
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            如果你对我的内容感兴趣，或者有任何问题和建议，欢迎与我联系！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center px-8 py-3 text-white rounded-lg backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              发送邮件
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 text-white rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              查看所有文章
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>

      {/* Scroll Navigation */}
      <ScrollNav sections={sections} />
    </div>
  )
} 