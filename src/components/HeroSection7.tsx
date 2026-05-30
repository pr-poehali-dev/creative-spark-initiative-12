export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-6 mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
          ✏️ Начальная школа · 1–4 класс
        </div>
        <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold max-w-3xl">
          Сборник креативных упражнений{" "}
          <span className="text-primary">для начальной школы</span>
        </h1>
        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
          Интерактивный сборник упражнений для учеников 1–4 класса. Четыре направления в каждом классе — выберите нужное и приступайте к творческой работе.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {[
            { num: "4", label: "Класса" },
            { num: "16", label: "Направлений" },
            { num: "∞", label: "Упражнений" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary">{num}</span>
              <span className="text-muted-foreground text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
