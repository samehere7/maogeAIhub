"use client"

import Link from "next/link"
import { BotMessageSquare, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input"

interface HeaderProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function Header({
  searchTerm,
  onSearchChange,
  // categories, // For future use
  // selectedCategory,
  // onCategoryChange
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <BotMessageSquare className="h-7 w-7 text-primary group-hover:text-primary/80 transition-colors" />
          <span className="font-bold text-xl inline-block bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Maoge AI Hub
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative w-full max-w-md ml-auto" // Adjusted for better positioning
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
            <Input
              type="search"
              placeholder="Search tools by name, category, or description..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-lg bg-muted/30 pl-10 pr-4 py-2 text-sm border border-primary/20 focus:border-primary/50 focus:bg-black/30 focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </form>
          {/* Category filter can be added here later using a Select component */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
