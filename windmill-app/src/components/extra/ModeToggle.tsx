import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/ui/theme-provider"

export function ModeToggle() {
  const { theme ,setTheme } = useTheme()

  const isDark = theme ==="dark";
  
  const toggleTheme =() =>{
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 rounded-md cursor-pointer text-primary"
    >
      { isDark ? (
        <Sun className="h-4 w-4"/>
      ): (
        <Moon className="h-4 w-4"/>
      )}
    </button>
  )
}