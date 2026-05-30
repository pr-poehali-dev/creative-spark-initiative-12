import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold flex-1">
              Работай умнее, а не больше со <span className="text-primary">СмарФлоу</span>
            </h1>
            <div className="flex-1 w-full flex flex-col gap-8">
              <p className="text-muted-foreground text-base lg:text-lg">
                Автоматизируй рабочие процессы, упрощай задачи и работай в команде без лишних усилий. Все инструменты в одной платформе для максимальной продуктивности.
              </p>

              <div className="flex flex-col lg:flex-row gap-3">
                <Button>Попробовать бесплатно</Button>
                <Button variant="ghost">
                  Узнать больше
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl border bg-background shadow-xl">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20image-BfDDyqA7gEJi5nCcYfKEbZOJR8pYrr.png"
              alt="Интерфейс СмартФлоу со статистикой заказов и метриками доходов"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
