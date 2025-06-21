"use client"

import { useState, useEffect, useCallback } from "react"

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      if (typeof window === "undefined") {
        console.warn(`Tried to set localStorage key "${key}" on the server. This operation will be ignored.`)
        return
      }
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue],
  )

  // Effect to update state if localStorage changes in another tab/window
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue)
        } catch (error) {
          console.error(`Error parsing localStorage change for key "${key}":`, error)
          setStoredValue(initialValue)
        }
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [key, initialValue])

  // This effect ensures that the state is synchronized with localStorage on initial client-side mount.
  // Useful if the initialValue passed to the hook might not be the actual initial state from localStorage
  // (e.g. if localStorage was populated by a previous session).
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key)
        if (item) {
          setStoredValue(JSON.parse(item))
        } else {
          // If no item, ensure initialValue is set in localStorage
          window.localStorage.setItem(key, JSON.stringify(initialValue))
          setStoredValue(initialValue)
        }
      } catch (error) {
        console.error(`Error initializing localStorage key "${key}":`, error)
        // Set to initialValue if error occurs
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        setStoredValue(initialValue)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]) // Only run on mount based on key

  return [storedValue, setValue]
}

export default useLocalStorage
