import { Github, Mail, Twitter, MapPin, Calendar, Code, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <img
                src="/api/placeholder/128/128"
                alt="头像"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              关于我
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              你好！我是一名充满热情的开发者，喜欢探索新技术，分享学习心得。
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">我的故事</h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  你好！我是一名前端开发工程师，目前专注于 React 和 Next.js 生态系统。
                  我对现代 Web 技术充满热情，喜欢构建用户友好的应用程序。
                </p>
                
                <p>
                  我的技术之旅始于大学时期，从那时起我就被编程的创造力所吸引。
                  多年来，我积累了丰富的全栈开发经验，从前端界面设计到后端 API 开发，
                  再到数据库设计和部署运维。
                </p>
                
                <p>
                  除了编程，我还热爱阅读、摄影和旅行。我相信生活中的各种经历都能为我的创作带来灵感。
                  我希望通过这个博客分享我的技术学习心得、生活感悟和创作思考。
                </p>
                
                <p>
                  如果你对我的文章感兴趣，或者想要交流技术问题，随时欢迎通过邮件或社交媒体与我联系！
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">技能专长</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">前端开发</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'JavaScript'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">后端开发</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">工具与部署</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Vercel', 'AWS', 'Linux', 'CI/CD'].map((skill) => (
                      <span key={skill} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">设计与创作</h3>
                  <div className="flex flex-wrap gap-2">
                    {['UI/UX', 'Figma', 'Photoshop', '写作', '摄影'].map((skill) => (
                      <span key={skill} className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">联系信息</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>北京, 中国</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>2020年开始编程</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Code className="h-5 w-5" />
                  <span>全栈开发者</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">社交媒体</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">有趣的事实</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>咖啡爱好者，一天至少3杯</span>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>喜欢在深夜时分编程</span>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>收集各种开发工具和插件</span>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>梦想是环游世界写代码</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 