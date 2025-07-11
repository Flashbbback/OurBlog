import { Github, Mail, Twitter, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">关于博客</h3>
              <p className="text-gray-400 mb-4">
                这是一个分享技术学习、生活感悟和创作思考的个人博客。
                希望通过文字记录成长，与大家分享有价值的内容。
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    博客文章
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                    关于我
                  </a>
                </li>
                <li>
                  <a href="/rss.xml" className="text-gray-400 hover:text-white transition-colors">
                    RSS 订阅
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">分类</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog?category=tech" className="text-gray-400 hover:text-white transition-colors">
                    技术
                  </a>
                </li>
                <li>
                  <a href="/blog?category=life" className="text-gray-400 hover:text-white transition-colors">
                    生活
                  </a>
                </li>
                <li>
                  <a href="/blog?category=thinking" className="text-gray-400 hover:text-white transition-colors">
                    思考
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 个人博客. 保留所有权利.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 