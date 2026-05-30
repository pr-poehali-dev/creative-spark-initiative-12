import { Logo } from "./Logo"
import { Separator } from "@/components/ui/separator"

export function Footer2() {
  return (
    <footer className="bg-muted py-10 lg:py-14" role="contentinfo" aria-label="Подвал сайта">
      <div className="container px-6 mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <a href="/" aria-label="На главную">
            <Logo />
          </a>
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Навигация в подвале">
            {["1 класс", "2 класс", "3 класс", "4 класс"].map((label, i) => (
              <a
                key={label}
                href={`#class-${i + 1}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <Separator role="presentation" />

        <p className="text-muted-foreground text-sm text-center">
          © 2026 Сборник креативных упражнений для начальной школы. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
