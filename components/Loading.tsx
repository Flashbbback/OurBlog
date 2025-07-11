import { Loader2 } from 'lucide-react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

export default function Loading({ size = 'md', text = '加载中...' }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center gap-2">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-primary-600`} />
        <span className="text-gray-600">{text}</span>
      </div>
    </div>
  )
} 