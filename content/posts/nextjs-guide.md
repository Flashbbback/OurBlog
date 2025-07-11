---
title: "Next.js 入门指南"
date: "2024-01-05"
excerpt: "本文介绍了 Next.js 的基本概念和如何快速上手开发现代化的 React 应用。包括路由、服务端渲染、静态生成等核心功能。"
tags: ["Next.js", "React", "前端", "教程"]
author: "博客作者"
published: true
---

# Next.js 入门指南

Next.js 是一个基于 React 的全栈框架，它提供了许多开箱即用的功能，让我们能够更高效地开发现代化的 Web 应用。

## 什么是 Next.js？

Next.js 是由 Vercel 公司开发的一个 React 框架，它具有以下特点：

- **零配置** - 开箱即用，无需复杂配置
- **服务端渲染** - 支持 SSR 和 SSG
- **自动代码分割** - 优化加载性能
- **文件系统路由** - 基于文件的路由系统
- **API 路由** - 内置 API 开发支持

## 快速开始

### 创建项目

```bash
npx create-next-app@latest my-blog --typescript --tailwind --eslint
cd my-blog
npm run dev
```

### 项目结构

```
my-blog/
├── app/                 # App Router (Next.js 13+)
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 主页
├── components/         # 组件
├── lib/               # 工具函数
├── public/            # 静态资源
└── types/             # TypeScript 类型
```

## 核心概念

### 1. 路由系统

Next.js 使用基于文件的路由系统：

```
app/
├── page.tsx           # /
├── about/
│   └── page.tsx      # /about
└── blog/
    ├── page.tsx      # /blog
    └── [slug]/
        └── page.tsx  # /blog/[slug]
```

### 2. 服务端渲染 (SSR)

```typescript
// app/posts/[id]/page.tsx
export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

### 3. 静态生成 (SSG)

```typescript
// 生成静态路径
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    id: post.id,
  }))
}
```

### 4. API 路由

```typescript
// app/api/posts/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await getAllPosts()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const body = await request.json()
  const post = await createPost(body)
  return NextResponse.json(post)
}
```

## 最佳实践

### 1. 组件组织

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### 2. 数据获取

```typescript
// lib/posts.ts
export async function getAllPosts() {
  const response = await fetch('/api/posts', {
    cache: 'no-store', // 禁用缓存
  })
  return response.json()
}

export async function getPostById(id: string) {
  const response = await fetch(`/api/posts/${id}`, {
    next: { revalidate: 3600 }, // 1小时后重新验证
  })
  return response.json()
}
```

### 3. 错误处理

```typescript
// app/error.tsx
'use client'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">出错了！</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        重试
      </button>
    </div>
  )
}
```

## 性能优化

### 1. 图片优化

```typescript
import Image from 'next/image'

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="card">
      <Image
        src={post.coverImage}
        alt={post.title}
        width={400}
        height={200}
        className="rounded-lg"
        priority={post.featured}
      />
      <h3>{post.title}</h3>
    </div>
  )
}
```

### 2. 代码分割

```typescript
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('../components/Chart'), {
  ssr: false,
  loading: () => <div>加载中...</div>
})
```

### 3. 字体优化

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

## 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动构建和部署

### 其他平台

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 总结

Next.js 是一个功能强大的 React 框架，它提供了：

- 简单易用的路由系统
- 多种渲染模式（SSR、SSG、CSR）
- 优秀的性能优化
- 完整的全栈开发支持

通过这个入门指南，你已经了解了 Next.js 的基本概念和使用方法。接下来可以通过实际项目来深入学习更多高级特性。

## 相关资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [React 文档](https://reactjs.org/docs)
- [TypeScript 手册](https://www.typescriptlang.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs) 