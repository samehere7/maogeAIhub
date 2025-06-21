"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useUserPreferences } from "@/hooks/use-ai-data"

export function ThemeToggle() {
  const { setTheme: setNextTheme, theme: nextTheme } = useTheme()
  const { preferences, setTheme: setStoredTheme } = useUserPreferences()

  React.useEffect(() => {
    // Sync next-themes with localStorage on initial load
    if (preferences.theme && nextTheme !== preferences.theme) {
      setNextTheme(preferences.theme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferences.theme])

  const toggleTheme = () => {
    const newTheme = nextTheme === "light" ? "dark" : "light"
    setNextTheme(newTheme)
    setStoredTheme(newTheme)
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
