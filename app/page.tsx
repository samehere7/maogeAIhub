"use client"

import { useState, useMemo, useEffect } from "react"
import Header from "@/components/layout/header"
import ToolCard from "@/components/tool-card"
import StatsPanel from "@/components/stats-panel"
import { useAiTools, useUserPreferences, useTrafficStats } from "@/hooks/use-ai-data"
import type { AiTool } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import { Frown } from "lucide-react"

export default function HomePage() {
  const { tools: allTools } = useAiTools()
  const { preferences, toggleFavorite } = useUserPreferences()
  const { stats: trafficStats } = useTrafficStats()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All") // Future use
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay for initial data fetch from localStorage
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500) // Adjust delay as needed
    return () => clearTimeout(timer)
  }, [])

  const filteredTools = useMemo(() => {
    const filtered = allTools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    
    // 按收藏状态排序：收藏的产品置顶
    return filtered.sort((a, b) => {
      const aIsFavorite = preferences.favorites.includes(a.id)
      const bIsFavorite = preferences.favorites.includes(b.id)
      
      if (aIsFavorite && !bIsFavorite) return -1
      if (!aIsFavorite && bIsFavorite) return 1
      return 0 // 保持原有顺序
    })
  }, [allTools, searchTerm, selectedCategory, preferences.favorites])

  const categories = useMemo(() => ["All", ...new Set(allTools.map((tool) => tool.category))], [allTools])

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* 顶部发光效果 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 top-glow"></div>
        
        {/* 修改标题样式 */}
        <div className="text-center mb-12 md:mb-16 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          AI tools for peak efficiency <br /> because your time is invaluable
          </h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(8)].map(
              (
                _,
                i, // Increased to 8 for better visual fill on wider screens
              ) => (
                <div key={i} className="flex flex-col h-full bg-card rounded-xl shadow-sm p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-lg" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                    <Skeleton className="h-7 w-7 rounded-full" />
                  </div>
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <div className="flex justify-between items-center pt-3 border-t border-border/20 mt-auto">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </div>
              ),
            )}
          </div>
        ) : filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredTools.map((tool: AiTool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                isFavorite={preferences.favorites.includes(tool.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-card/30 rounded-xl backdrop-blur-sm border border-border/30">
            <Frown className="mx-auto h-16 w-16 text-primary/50 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Tools Found</h2>
            <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
          </div>
        )}
        <StatsPanel stats={trafficStats} tools={allTools} />
      </main>
      <footer className="border-t border-border/20 mt-12">
        <div className="container flex flex-col items-center justify-center gap-2 h-20 md:flex-row md:justify-between max-w-screen-2xl py-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Maoge AI Hub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Discover the best AI tools, curated for you.</p>
        </div>
      </footer>
    </div>
  )
}
