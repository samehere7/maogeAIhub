export interface AiTool {
  id: string
  name: string
  iconUrl: string
  description: string
  category: string
  screenshots: string[] // URLs to screenshot images
  markdownDoc: string // Markdown content for documentation
  originalUrl: string // URL to the AI tool's website
}

export interface TrafficData {
  total: number
  daily: {
    [date: string]: number // date in YYYY-MM-DD format
  }
}

export interface AllTrafficStats {
  [toolId: string]: TrafficData
}

export interface UserPreferences {
  favorites: string[] // array of tool IDs
  recentlyViewed: string[] // array of tool IDs
  theme: "light" | "dark" | "system"
}

// Represents the structure in localStorage
export interface LocalStorageData {
  aiTools: AiTool[]
  userPreferences: UserPreferences
  trafficStats: AllTrafficStats
}
