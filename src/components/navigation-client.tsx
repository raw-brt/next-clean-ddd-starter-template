"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

interface NavigationClientProps {
  translations: {
    home: string
    about: string
  }
}

export function NavigationClient({ translations }: NavigationClientProps) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-bold">
          {translations.home}
        </Link>
        <Link href="/about" className="font-medium">
          {translations.about}
        </Link>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </>
  )
} 