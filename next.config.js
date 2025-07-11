/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  // 如果需要部署到静态网站，可以取消注释下面的配置
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig 