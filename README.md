# 个人博客项目

这是一个基于 Next.js 14 和 TypeScript 构建的现代化个人博客项目，采用了 App Router 和 Tailwind CSS，支持 Markdown 文章管理。

## ✨ 功能特性

- 🎨 **现代化设计** - 基于 Tailwind CSS 的响应式设计
- 📱 **移动端友好** - 完全响应式，支持各种设备
- 🚀 **高性能** - 基于 Next.js 14 的 App Router，支持 SSR 和 SSG
- 📝 **Markdown 支持** - 使用 Markdown 编写博客文章
- 🔍 **SEO 优化** - 内置 SEO 优化和 Open Graph 支持
- 🎯 **TypeScript** - 完整的类型安全支持
- 🌙 **深色模式** - 支持深色模式切换（可扩展）
- 📊 **文章统计** - 自动计算阅读时间
- 🏷️ **标签系统** - 支持文章标签分类
- 🔗 **友好的 URL** - 基于文件的路由系统

## 🛠️ 技术栈

### 前端框架
- [Next.js 14](https://nextjs.org/) - React 全栈框架
- [React 18](https://reactjs.org/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript

### 样式和 UI
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) - 文章排版插件
- [Lucide React](https://lucide.dev/) - 图标库

### 内容管理
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Front Matter 解析
- [Remark](https://remark.js.org/) - Markdown 处理器
- [date-fns](https://date-fns.org/) - 日期处理库

### 开发工具
- [ESLint](https://eslint.org/) - 代码检查
- [PostCSS](https://postcss.org/) - CSS 后处理器
- [Autoprefixer](https://github.com/postcss/autoprefixer) - 自动添加浏览器前缀

## 📦 安装和运行

### 环境要求
- Node.js 18+ 
- npm 或 yarn 或 pnpm

### 安装依赖
```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 开发环境
```bash
# 启动开发服务器
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建和部署
```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 修复代码问题
npm run lint:fix
```

## 📁 项目结构

```
personal-blog/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── about/             # 关于页面
│   │   └── page.tsx
│   └── blog/              # 博客相关页面
│       ├── page.tsx       # 博客列表
│       └── [slug]/        # 文章详情
│           └── page.tsx
├── components/            # 可复用组件
│   ├── Header.tsx         # 头部导航
│   ├── Footer.tsx         # 页脚
│   ├── Layout.tsx         # 布局组件
│   ├── BlogCard.tsx       # 博客卡片
│   └── Loading.tsx        # 加载组件
├── content/               # 博客内容
│   └── posts/             # Markdown 文章
│       ├── welcome.md
│       ├── nextjs-guide.md
│       └── learning-methodology.md
├── lib/                   # 工具库
│   ├── blog.ts           # 博客相关工具函数
│   └── utils.ts          # 通用工具函数
├── types/                 # TypeScript 类型定义
│   └── blog.ts
├── public/               # 静态资源
├── package.json
├── tailwind.config.js    # Tailwind CSS 配置
├── tsconfig.json         # TypeScript 配置
└── next.config.js        # Next.js 配置
```

## 📝 写作指南

### 创建新文章

1. 在 `content/posts/` 目录下创建新的 `.md` 文件
2. 文件名将作为 URL 的一部分（例如：`my-post.md` → `/blog/my-post`）
3. 文章需要包含 Front Matter 头部信息

### Front Matter 格式

```markdown
---
title: "文章标题"
date: "2024-01-01"
excerpt: "文章摘要，用于SEO和文章列表显示"
tags: ["标签1", "标签2", "标签3"]
author: "作者姓名"
published: true
coverImage: "/images/cover.jpg"  # 可选
---

# 文章内容

这里是文章的正文内容...
```

### 支持的 Markdown 功能

- ✅ 标题 (H1-H6)
- ✅ 段落和换行
- ✅ **粗体** 和 *斜体*
- ✅ 链接和图片
- ✅ 代码块和行内代码
- ✅ 列表（有序和无序）
- ✅ 引用
- ✅ 表格
- ✅ 水平分割线

## 🎨 自定义配置

### 修改主题颜色

编辑 `tailwind.config.js` 文件中的 `primary` 颜色：

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... 其他颜色值
  },
},
```

### 修改网站信息

编辑 `app/layout.tsx` 文件中的 metadata：

```typescript
export const metadata = {
  title: '你的博客名称',
  description: '你的博客描述',
  // ... 其他配置
}
```

### 添加新页面

在 `app/` 目录下创建新的文件夹和 `page.tsx` 文件：

```typescript
// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <div>
      <h1>我的项目</h1>
      {/* 页面内容 */}
    </div>
  )
}
```

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中连接 GitHub 仓库
3. 自动构建和部署

### 其他平台

#### Netlify
```bash
npm run build
# 上传 .next 文件夹到 Netlify
```

#### 静态导出
```bash
# 取消注释 next.config.js 中的 output: 'export'
npm run build
# 上传 out 文件夹到静态托管服务
```

## 🔧 常见问题

### Q: 如何添加评论系统？
A: 可以集成 Giscus、Disqus 或 Utterances 等评论系统。

### Q: 如何添加搜索功能？
A: 可以使用 Algolia 或者实现本地搜索功能。

### Q: 如何添加 RSS 订阅？
A: 可以使用 `feed` 包生成 RSS 文件。

### Q: 如何添加统计分析？
A: 可以集成 Google Analytics、Plausible 或 Umami。

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📧 联系方式

- 邮箱：your-email@example.com
- GitHub：[@yourusername](https://github.com/yourusername)
- 博客：[your-blog.com](https://your-blog.com)

## 🙏 致谢

感谢以下开源项目：

- [Next.js](https://nextjs.org/) - 强大的 React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 优秀的 CSS 框架
- [Lucide](https://lucide.dev/) - 美观的图标库
- [Vercel](https://vercel.com/) - 优秀的部署平台

---

⭐ 如果这个项目对你有帮助，请考虑给它一个 Star！ 