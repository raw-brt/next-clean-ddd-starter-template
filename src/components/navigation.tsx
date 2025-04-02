import { getDictionary } from "@/dictionaries"
import { NavigationClient } from "@/components/navigation-client"

export async function Navigation() {
  const dict = await getDictionary("en") // TODO: Get locale from middleware

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <NavigationClient translations={dict.navigation} />
      </div>
    </nav>
  )
} 