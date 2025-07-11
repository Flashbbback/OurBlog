import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '个人博客',
  description: '分享技术、生活与思考',
  keywords: ['博客', '技术', '前端', '个人'],
  authors: [{ name: '博客作者' }],
  creator: '博客作者',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: '个人博客',
    description: '分享技术、生活与思考',
    url: 'https://your-domain.com',
    siteName: '个人博客',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '个人博客',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '个人博客',
    description: '分享技术、生活与思考',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </div>
      </body>
    </html>
  )
} 