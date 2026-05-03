"use client"

import { useEffect } from "react"

export function MyScript({ code }: { code: string }) {
  useEffect(() => {
    try {
      // Safely evaluate the code
      const fn = new Function(code)
      fn()
    } catch (e) {
      console.error("Error executing script component:", e)
    }
  }, [code])

  return null
}
