import { Logo } from "./Logo"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer2() {
  return (
    <footer className="bg-muted py-16 lg:py-24" role="contentinfo" aria-label="Подвал сайта">
      <div className="container px-6 mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-12">
            <div className="flex flex-col items-center lg:flex-row gap-12">
              <a href="/" aria-label="На главную">
                <Logo />
              </a>

              <nav
                className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center"
                aria-label="Навигация в подвале"
              >
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Главная
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Поддержка
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Вопросы
                </a>
              </nav>
            </div>

            <form
              className="flex flex-col md:flex-row gap-2 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Форма подписки на рассылку"
            >
              <Input
                type="email"
                placeholder="Ваш email"
                className="md:w-[242px]"
                required
                aria-required="true"
                aria-label="Введите email для подписки"
              />
              <Button type="submit" className="w-full md:w-auto" aria-label="Подписаться на рассылку">
                Подписаться
              </Button>
            </form>
          </div>

          <Separator role="presentation" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center">
            <p className="text-muted-foreground order-2 md:order-1">
              2025 СмартФлоу. Все права защищены.
            </p>

            <nav
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 order-1 md:order-2"
              aria-label="Юридические ссылки"
            >
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Настройки cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
