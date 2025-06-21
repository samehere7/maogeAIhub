"use client"

import Link from "next/link"
import Image from "next/image"
import type { AiTool } from "@/lib/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react" // Added Star for visual flair

interface ToolCardProps {
  tool: AiTool
  isFavorite: boolean
  onToggleFavorite: (toolId: string) => void
}

export default function ToolCard({ tool, isFavorite, onToggleFavorite }: ToolCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group card-glow relative border border-transparent hover:border-primary/20">
      {/* 添加顶部发光效果 */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-40"></div>
      </div>
      
      <CardHeader className="p-5 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={tool.iconUrl || "/placeholder.svg?width=40&height=40&query=AI+tool+icon"}
              alt={`${tool.name} icon`}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">
              {tool.name}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onToggleFavorite(tool.id)
            }}
            className="shrink-0 h-8 w-8 rounded-full hover:bg-muted"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`h-4 w-4 transition-all ${
                isFavorite ? "fill-primary text-primary" : "text-muted-foreground group-hover:text-primary/80"
              }`}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex-grow relative z-10">
        <CardDescription className="text-xs line-clamp-2 text-muted-foreground leading-relaxed">
          {tool.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-5 pt-2 flex justify-between items-center border-t border-border/10 mt-auto backdrop-blur-sm bg-black/10 relative z-10">
        <Badge variant="outline" className="text-xs font-medium px-2 py-0.5 border-primary/30 bg-black/30 text-primary/80">
          {tool.category}
        </Badge>
        <Link href={`/${tool.id}`} passHref legacyBehavior>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs h-auto py-1 px-2 group-hover:text-primary transition-colors"
          >
            View Details <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
