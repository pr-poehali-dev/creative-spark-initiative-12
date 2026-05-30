import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "СмартФлоу бесплатный?",
    answer: "Да! Мы предлагаем бесплатный план с базовыми функциями для старта.",
  },
  {
    question: "Можно ли отменить подписку в любое время?",
    answer: "Да, вы можете отменить подписку в любой момент. Никаких долгосрочных обязательств.",
  },
  {
    question: "Есть ли скидки для НКО и образовательных учреждений?",
    answer:
      "Да, мы предлагаем специальные условия для некоммерческих организаций и образовательных учреждений. Свяжитесь с нами для получения подробностей.",
  },
  {
    question: "Какие интеграции поддерживает СмартФлоу?",
    answer:
      "СмартФлоу интегрируется с популярными инструментами: Slack, Google Workspace, Trello и многими другими. Полный список в документации.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Есть вопросы? У нас есть ответы.
          </h1>
          <p className="text-muted-foreground">
            Мы собрали самую важную информацию, чтобы помочь вам. Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Свяжитесь с нами.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Остались вопросы?</h2>
            <p className="text-base text-muted-foreground">
              Нужна помощь или консультация? Наша команда всегда готова помочь!
            </p>
          </div>
          <Button aria-label="Связаться с поддержкой">Написать нам</Button>
        </div>
      </div>
    </section>
  )
}
