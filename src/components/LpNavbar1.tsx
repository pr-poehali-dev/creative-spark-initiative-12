import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const MENU_ITEMS = [
  { label: "Возможности", href: "#" },
  { label: "Отзывы", href: "#" },
  { label: "Тарифы", href: "#" },
  { label: "Вопросы", href: "#" },
] as const

interface NavMenuItemsProps {
  className?: string
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col md:flex-row gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <a key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </a>
    ))}
  </div>
)

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className="sticky top-0 z-50 bg-background py-3.5 md:py-4 isolate">
      <div className="container relative px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 m-auto">
        <div className="flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>
          <Button
            variant="ghost"
            className="size-9 flex items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-5 w-full justify-end">
          <NavMenuItems />
          <a href="#">
            <Button>Начать</Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-5 w-full justify-end pb-2.5">
            <NavMenuItems />
            <a href="#">
              <Button className="w-full">Начать</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
