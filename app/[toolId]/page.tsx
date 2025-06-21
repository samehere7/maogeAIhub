"use client"

import { useEffect, useState } from "react"
import { useParams, notFound, useRouter } from "next/navigation"
import Header from "@/components/layout/header" // Re-use header for consistent navigation
import ImageCarousel from "@/components/image-carousel"
import MarkdownRenderer from "@/components/markdown-renderer"
import { useAiTools, useUserPreferences, useTrafficStats } from "@/hooks/use-ai-data"
import type { AiTool } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Heart } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function ToolDetailPage() {
  const params = useParams()
  const router = useRouter()
  const toolId = params.toolId as string

  const { tools } = useAiTools()
  const { preferences, toggleFavorite, addRecentlyViewed } = useUserPreferences()
  const { recordVisit } = useTrafficStats()

  const [tool, setTool] = useState<AiTool | null | undefined>(undefined) // undefined for loading, null for not found

  useEffect(() => {
    if (toolId && tools.length > 0) {
      const foundTool = tools.find((t) => t.id === toolId)
      setTool(foundTool || null)
      if (foundTool) {
        addRecentlyViewed(foundTool.id)
      }
    }
  }, [toolId, tools, addRecentlyViewed])

  const handleGoToSite = () => {
    if (tool) {
      recordVisit(tool.id)
      window.open(tool.originalUrl, "_blank", "noopener,noreferrer")
    }
  }

  // Dummy search state for Header, not functional on this page but keeps structure
  const [searchTerm, setSearchTerm] = useState("")
  const categories = ["All"] // Dummy
  const [selectedCategory, setSelectedCategory] = useState("All") // Dummy

  if (tool === undefined) {
    // Loading state
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow relative">
          <div className="mb-6">
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <Skeleton className="aspect-video w-full rounded-lg" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (tool === null) {
    notFound() // This will render the not-found.tsx page if you have one
    return null // Or handle not found differently
  }

  const isFavorite = preferences.favorites.includes(tool.id)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow relative">
        {/* 顶部发光效果 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 top-glow"></div>
        
        <Button 
          variant="outline" 
          onClick={() => router.back()} 
          className="mb-6 border-primary/30 hover:bg-black/30 text-primary/80 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to list
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="md:sticky md:top-24 self-start"> 
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* 添加发光边框 */}
              <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(255,183,77,0.15)] pointer-events-none"></div>
              <ImageCarousel slides={tool.screenshots} toolName={tool.name} options={{ loop: true }} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                {tool.name}
              </h1>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => toggleFavorite(tool.id)} 
                className="shrink-0 hover:bg-black/30"
              >
                <Heart className={`h-6 w-6 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                <span className="sr-only">{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
            </div>
            <p className="text-lg text-muted-foreground">{tool.description}</p>

            <Button
              onClick={handleGoToSite}
              size="lg"
              className="w-full md:w-auto fixed bottom-4 right-4 left-4 md:static z-50 shadow-lg md:shadow-none rounded-lg md:rounded-md text-base py-3 bg-primary hover:bg-primary/80 text-black" // 修改按钮颜色为金色
            >
              Go to Original Site <ExternalLink className="ml-2 h-5 w-5" />
            </Button>

            <div className="prose dark:prose-invert max-w-none bg-card/30 p-5 sm:p-6 rounded-xl shadow-sm border border-primary/20 backdrop-blur-sm">
              <h2 className="text-lg font-semibold mb-4 border-b border-primary/20 pb-3 text-primary">Usage Instructions</h2>
              <MarkdownRenderer content={tool.markdownDoc} />
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-primary/20 mt-12">
        <div className="container flex flex-col items-center justify-center gap-2 h-20 md:flex-row md:justify-between max-w-screen-2xl py-4">
          <p className="text-xs text-muted-foreground">
            Viewing: <span className="font-semibold text-primary/80">{tool.name}</span>
          </p>
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Maoge AI Hub</p>
        </div>
      </footer>
    </div>
  )
}
