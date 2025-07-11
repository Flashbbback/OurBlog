# 部署指南

本指南详细介绍了如何将个人博客部署到不同的平台，包括免费和付费选项。

## 🚀 快速部署 (Vercel - 推荐)

Vercel 是 Next.js 的创建者，提供了最佳的 Next.js 应用部署体验。

### 步骤

1. **准备 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-blog.git
   git push -u origin main
   ```

2. **连接 Vercel**
   - 访问 [Vercel](https://vercel.com/)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的博客仓库
   - 点击 "Deploy"

3. **自动部署**
   - Vercel 会自动检测 Next.js 项目
   - 自动安装依赖并构建
   - 部署完成后提供访问链接

### 自定义域名

1. **购买域名**
   - 推荐：Namecheap, GoDaddy, 阿里云等

2. **配置域名**
   ```bash
   # 在 Vercel 项目设置中
   # 1. 进入 Domains 标签
   # 2. 添加你的域名
   # 3. 按照提示配置 DNS 记录
   ```

3. **DNS 配置示例**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### 环境变量

```bash
# 在 Vercel 项目设置中添加环境变量
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🌐 其他部署选项

### 1. Netlify

**优点**：
- 免费方案慷慨
- 内置表单处理
- 良好的 CDN 性能
- 支持静态站点生成

**部署步骤**：

1. **配置构建设置**
   ```toml
   # netlify.toml
   [build]
   publish = "out"
   command = "npm run build && npm run export"
   
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

2. **修改 Next.js 配置**
   ```javascript
   // next.config.js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   }
   
   module.exports = nextConfig
   ```

3. **部署**
   - 连接 GitHub 仓库
   - 配置构建命令：`npm run build`
   - 发布目录：`out`

### 2. GitHub Pages

**适用场景**：
- 完全免费
- 简单的静态博客
- 不需要服务端功能

**部署步骤**：

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **配置 package.json**
   ```json
   {
     "scripts": {
       "deploy": "next build && next export && gh-pages -d out"
     }
   }
   ```

3. **部署**
   ```bash
   npm run deploy
   ```

### 3. Cloudflare Pages

**优点**：
- 全球 CDN
- 无限带宽
- 良好的性能
- 免费 SSL

**部署步骤**：

1. **连接 GitHub**
   - 登录 Cloudflare Pages
   - 连接 GitHub 仓库

2. **配置构建**
   ```
   Build command: npm run build
   Build output directory: out
   ```

3. **环境变量**
   ```
   NODE_VERSION=18
   ```

## 🖥️ 自托管部署

### 1. 使用 Docker

**Dockerfile**：
```dockerfile
# 使用官方 Node.js 镜像
FROM node:18-alpine AS base

# 安装依赖
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# 构建应用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 生产镜像
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**构建和运行**：
```bash
# 构建镜像
docker build -t my-blog .

# 运行容器
docker run -p 3000:3000 my-blog
```

### 2. 使用 PM2 (生产环境)

**安装 PM2**：
```bash
npm install -g pm2
```

**PM2 配置文件**：
```javascript
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'my-blog',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/your/blog',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      max_memory_restart: '1G',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
}
```

**部署脚本**：
```bash
#!/bin/bash
# deploy.sh

# 拉取最新代码
git pull origin main

# 安装依赖
npm ci

# 构建应用
npm run build

# 重启应用
pm2 reload ecosystem.config.js
```

### 3. Nginx 反向代理

**Nginx 配置**：
```nginx
# /etc/nginx/sites-available/my-blog
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**启用配置**：
```bash
sudo ln -s /etc/nginx/sites-available/my-blog /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔒 HTTPS 和安全配置

### 1. Let's Encrypt SSL

**安装 Certbot**：
```bash
sudo apt install certbot python3-certbot-nginx
```

**获取 SSL 证书**：
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

**自动续期**：
```bash
sudo crontab -e
# 添加以下行
0 12 * * * /usr/bin/certbot renew --quiet
```

### 2. 安全头配置

**Next.js 配置**：
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

## 🔄 CI/CD 自动化

### 1. GitHub Actions

**工作流配置**：
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        vercel-args: '--prod'
```

### 2. 自动化测试

**测试脚本**：
```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

**Jest 配置**：
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
```

## 📊 性能监控

### 1. Web Vitals 监控

**Google Analytics**：
```javascript
// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

### 2. 错误监控

**Sentry 集成**：
```javascript
// sentry.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
})
```

## 🔧 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 检查依赖
   npm audit
   
   # 清理缓存
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **部署后页面空白**
   - 检查 console 错误
   - 确认环境变量配置
   - 验证构建输出

3. **样式不加载**
   - 检查 CSS 文件路径
   - 确认 Tailwind CSS 配置
   - 验证构建过程

### 日志和调试

**服务器日志**：
```bash
# PM2 日志
pm2 logs

# Docker 日志
docker logs container_name

# Nginx 日志
sudo tail -f /var/log/nginx/error.log
```

**性能分析**：
```bash
# Next.js 分析
npm run build -- --analyze

# 性能测试
npm install -g lighthouse
lighthouse https://yourdomain.com
```

## 📈 优化建议

### 1. 性能优化

- 启用 gzip 压缩
- 使用 CDN 加速
- 图片优化和懒加载
- 代码分割和预加载

### 2. SEO 优化

- 生成 sitemap.xml
- 配置 robots.txt
- 添加结构化数据
- 优化页面加载速度

### 3. 用户体验

- 添加 PWA 支持
- 实现离线功能
- 优化移动端体验
- 添加深色模式

---

选择合适的部署方案取决于你的具体需求、技术水平和预算。对于大多数个人博客，Vercel 是最佳选择，因为它提供了最简单的部署体验和最好的性能。如果你需要更多的控制权或有特殊需求，可以考虑自托管方案。 