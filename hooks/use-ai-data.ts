"use client"

import { useCallback, useEffect } from "react"
import useLocalStorage from "./use-local-storage"
import type { AiTool, UserPreferences, AllTrafficStats } from "@/lib/types"
import { INITIAL_TOOLS, DEFAULT_USER_PREFERENCES, DEFAULT_TRAFFIC_STATS } from "@/lib/data"

const AI_TOOLS_KEY = "maoge_ai_hub_tools"
const USER_PREFERENCES_KEY = "maoge_ai_hub_user_prefs"
const TRAFFIC_STATS_KEY = "maoge_ai_hub_traffic"

export function useAiTools() {
  const [tools, setTools] = useLocalStorage<AiTool[]>(AI_TOOLS_KEY, INITIAL_TOOLS)
  // Ensure tools are initialized if localStorage is empty
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTools = window.localStorage.getItem(AI_TOOLS_KEY)
      if (!storedTools || JSON.parse(storedTools).length === 0) {
        setTools(INITIAL_TOOLS)
      }
    }
  }, [setTools])
  return { tools, setTools }
}

export function useUserPreferences() {
  const [preferences, setPreferences] = useLocalStorage<UserPreferences>(USER_PREFERENCES_KEY, DEFAULT_USER_PREFERENCES)

  const toggleFavorite = useCallback(
    (toolId: string) => {
      setPreferences((prev) => {
        const newFavorites = prev.favorites.includes(toolId)
          ? prev.favorites.filter((id) => id !== toolId)
          : [...prev.favorites, toolId]
        return { ...prev, favorites: newFavorites }
      })
    },
    [setPreferences],
  )

  const addRecentlyViewed = useCallback(
    (toolId: string) => {
      setPreferences((prev) => {
        const newRecentlyViewed = [toolId, ...prev.recentlyViewed.filter((id) => id !== toolId)].slice(0, 10) // Keep last 10
        return { ...prev, recentlyViewed: newRecentlyViewed }
      })
    },
    [setPreferences],
  )

  const setTheme = useCallback(
    (theme: "light" | "dark" | "system") => {
      setPreferences((prev) => ({ ...prev, theme }))
    },
    [setPreferences],
  )

  return { preferences, toggleFavorite, addRecentlyViewed, setTheme }
}

export function useTrafficStats() {
  const [stats, setStats] = useLocalStorage<AllTrafficStats>(TRAFFIC_STATS_KEY, DEFAULT_TRAFFIC_STATS)

  const recordVisit = useCallback(
    (toolId: string) => {
      setStats((prev) => {
        const today = new Date().toISOString().split("T")[0] // YYYY-MM-DD
        const toolStats = prev[toolId] || { total: 0, daily: {} }

        return {
          ...prev,
          [toolId]: {
            total: (toolStats.total || 0) + 1,
            daily: {
              ...toolStats.daily,
              [today]: (toolStats.daily?.[today] || 0) + 1,
            },
          },
        }
      })
    },
    [setStats],
  )

  return { stats, recordVisit }
}
