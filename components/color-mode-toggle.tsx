// this component was customized
// not used
"use client"

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon} from "lucide-react";
import { IconButton } from "@chakra-ui/react"

export function ColorModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  // to prevent hydration warning
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <IconButton aria-label="toggle color mode" onClick={toggleColorMode}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  )
}
