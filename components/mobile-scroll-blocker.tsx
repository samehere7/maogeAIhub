"use client"

import { useEffect } from 'react'

export default function MobileScrollBlocker() {
  useEffect(() => {
    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX || !startY) return

      const currentX = e.touches[0].clientX
      const currentY = e.touches[0].clientY
      
      const diffX = Math.abs(currentX - startX)
      const diffY = Math.abs(currentY - startY)

      // 如果水平滑动距离大于垂直滑动距离，阻止事件
      if (diffX > diffY) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    const handleTouchEnd = () => {
      startX = 0
      startY = 0
    }

    // 阻止水平滚动
    const preventHorizontalScroll = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    // 添加事件监听器
    document.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: false })
    document.addEventListener('wheel', preventHorizontalScroll, { passive: false })

    // 强制设置body样式
    document.body.style.overflowX = 'hidden'
    document.documentElement.style.overflowX = 'hidden'
    document.body.style.maxWidth = '100vw'
    document.documentElement.style.maxWidth = '100vw'

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('wheel', preventHorizontalScroll)
    }
  }, [])

  return null
}