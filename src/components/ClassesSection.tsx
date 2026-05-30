import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

type Exercise = {
  title: string
  goal: string
  time: string
  form: string
  material: string
  subject: string
  task: string
  teacherNote: string
}

type Direction = {
  id: number
  icon: string
  title: string
  description: string
  exercises: Exercise[]
}

type ClassData = {
  id: string
  grade: string
  emoji: string
  badgeColor: string
  iconBg: string
  iconColor: string
  directions: Direction[]
}

const CLASS_1_FLUENCY_EXERCISES: Exercise[] = [
  {
    title: "«Попрыгаем как...» (беглость движений)",
    goal: "Развитие беглости двигательного воображения",
    time: "3 минуты",
    form: "Фронтально",
    material: "Без материалов",
    subject: "Физкультура (можно заменить на «Музыка»)",
    task: "«Сейчас мы будем прыгать как разные животные. Я называю, вы прыгаете. Кенгуру! Лягушка! Воробей! А теперь придумайте сами, как ещё можно прыгать? Назовите и покажите».",
    teacherNote: "Поощрять не менее 5 разных прыжков (зайчик, кузнечик, мячик, попрыгунья стрекоза, клоун).",
  },
  {
    title: "«Сколько всего ушей у трёх мышей?» (быстрый счёт)",
    goal: "Развитие беглости устного счёта в нестандартных вопросах",
    time: "2 минуты",
    form: "Фронтально",
    material: "Без материалов",
    subject: "Математика, Окружающий мир",
    task: "«Отвечайте быстро: сколько ушей у трёх мышей? (6). А сколько лап у двух собак? (8). А сколько хвостов у пяти кошек? (5). А сколько голов у семи поросят? (7). А сколько рогов у четырёх коров? (8)».",
    teacherNote: "Тренирует беглость и внимание. Можно давать свои варианты.",
  },
  {
    title: "«Назови пять» (быстрое перечисление)",
    goal: "Развитие беглости называния объектов по теме",
    time: "2 минуты",
    form: "Фронтально",
    material: "Без материалов",
    subject: "Окружающий мир",
    task: "«Назови быстро пять фруктов. А теперь пять игрушек. А теперь пять птиц. Кто больше всех назовёт? Считаем хором».",
    teacherNote: "Варианты: пять цветов, пять деревьев, пять видов транспорта, пять сказочных героев.",
  },
  {
    title: "«Что бывает круглым?» (беглость по признаку)",
    goal: "Развитие беглости подбора предметов по заданной форме",
    time: "2 минуты",
    form: "Фронтально",
    material: "Без материалов",
    subject: "Математика, Окружающий мир",
    task: "«Назовите как можно больше предметов, которые бывают круглыми. Например: мяч, тарелка, солнце, пуговица, яблоко, шапка… Кто больше?»",
    teacherNote: "Поощрять не менее 10 предметов. Аналогично: «Что бывает квадратным?», «Что бывает красным?».",
  },
  {
    title: "«Придумай 5 способов» (для самых маленьких)",
    goal: "Развитие беглости придумывания простых альтернативных применений",
    time: "3 минуты",
    form: "Фронтально",
    material: "Пустой стаканчик, лист бумаги",
    subject: "Труды, Окружающий мир",
    task: "«Вот пустой стаканчик. Что с ним можно сделать, кроме того, чтобы пить из него? Назовите 5 способов. Например: положить в него ручки, поставить туда цветок, сделать из него шляпу, построить башню, использовать как колокольчик».",
    teacherNote: "Для 1 класса достаточно 5 способов. Можно взять лист бумаги, носок, коробку.",
  },
  {
    title: "«Угадай, что я задумал» (беглость вопросов)",
    goal: "Развитие беглости задавания вопросов для сужения круга",
    time: "4 минуты",
    form: "В парах",
    material: "Карточки с картинками предметов",
    subject: "Русский язык, Окружающий мир",
    task: "«Один ученик загадывает предмет на картинке (не показывает). Другой задаёт вопросы, на которые можно ответить «да» или «нет», чтобы угадать. Кто быстрее угадает, тот выиграл. Поменяйтесь. Старайтесь задавать как можно больше разных вопросов».",
    teacherNote: "Примеры вопросов: «Это живое?», «Оно красного цвета?», «Оно больше кошки?», «Его можно есть?». Учит быстро перебирать признаки.",
  },
  {
    title: "«Росло 4 груши» (беглость с подвохом)",
    goal: "Развитие беглости внимания и нестандартного мышления в простых задачах",
    time: "2 минуты",
    form: "Фронтально",
    material: "Без материалов",
    subject: "Математика, Окружающий мир",
    task: "«Слушайте внимательно: «Росло 4 груши. На каждой — по 3 ветки, на каждой ветке — по 3 яблока. Сколько всего яблок?» (Нисколько — на груше яблоки не растут). А теперь: «Одно яйцо варят 4 минуты. Сколько минут надо варить 5 яиц?» (4 минуты). Кто догадался?»",
    teacherNote: "Учит не спешить с ответом, замечать несоответствия.",
  },
]

const DIRECTIONS_TEMPLATE = [
  { id: 1, icon: "Zap", title: "Беглость", description: "Умение быстро генерировать идеи и находить много вариантов решения" },
  { id: 2, icon: "Shuffle", title: "Гибкость", description: "Способность переключаться между разными категориями и подходами" },
  { id: 3, icon: "Sparkles", title: "Оригинальность", description: "Создание необычных, нестандартных идей и решений" },
  { id: 4, icon: "Layers", title: "Разработанность", description: "Умение детально прорабатывать и дополнять идеи" },
]

const CLASSES: ClassData[] = [
  {
    id: "class-1",
    grade: "1 класс",
    emoji: "🌱",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    directions: DIRECTIONS_TEMPLATE.map((d, i) => ({
      ...d,
      exercises: i === 0 ? CLASS_1_FLUENCY_EXERCISES : [],
    })),
  },
  {
    id: "class-2",
    grade: "2 класс",
    emoji: "🌿",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    directions: DIRECTIONS_TEMPLATE.map((d) => ({ ...d, exercises: [] })),
  },
  {
    id: "class-3",
    grade: "3 класс",
    emoji: "🌳",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    directions: DIRECTIONS_TEMPLATE.map((d) => ({ ...d, exercises: [] })),
  },
  {
    id: "class-4",
    grade: "4 класс",
    emoji: "🏆",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    directions: DIRECTIONS_TEMPLATE.map((d) => ({ ...d, exercises: [] })),
  },
]

function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  return (
    <div className="border border-border rounded-xl p-5 bg-background flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="text-2xl font-bold text-primary opacity-40 leading-none mt-0.5">{index + 1}</span>
        <h4 className="font-semibold text-foreground leading-snug">{exercise.title}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div className="flex items-start gap-2 text-muted-foreground">
          <span>🎯</span><span><b>Цель:</b> {exercise.goal}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>⏱️</span><span><b>Время:</b> {exercise.time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>🧑‍🏫</span><span><b>Форма:</b> {exercise.form}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>📋</span><span><b>Материал:</b> {exercise.material}</span>
        </div>
        <div className="flex items-start gap-2 text-muted-foreground sm:col-span-2">
          <span>🧩</span><span><b>Предмет:</b> {exercise.subject}</span>
        </div>
      </div>
      <div className="bg-muted rounded-lg p-4 text-sm text-foreground">
        <p className="font-medium mb-1 text-muted-foreground text-xs uppercase tracking-wide">Задание</p>
        <p>{exercise.task}</p>
      </div>
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-sm text-muted-foreground">
        <p className="font-medium mb-1 text-primary text-xs uppercase tracking-wide">Материалы для учителя</p>
        <p>{exercise.teacherNote}</p>
      </div>
    </div>
  )
}

export function ClassesSection() {
  const [openDialog, setOpenDialog] = useState<{ grade: string; direction: Direction } | null>(null)

  return (
    <section className="py-16 lg:py-24">
      <div className="container px-6 mx-auto flex flex-col gap-16">
        {CLASSES.map((cls) => (
          <div key={cls.id} id={cls.id} className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{cls.emoji}</span>
              <div>
                <Badge variant="outline" className={`mb-1 ${cls.badgeColor}`}>
                  {cls.grade}
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {cls.grade} — 4 направления
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cls.directions.map((dir) => (
                <Card
                  key={dir.id}
                  className="bg-card border-border hover:border-primary/40 transition-all cursor-pointer group hover:shadow-lg hover:-translate-y-0.5"
                  onClick={() => setOpenDialog({ grade: cls.grade, direction: dir })}
                >
                  <CardHeader className="pb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${cls.iconBg}`}>
                      <Icon name={dir.icon as "Zap"} size={20} className={cls.iconColor} />
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {dir.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p className="text-muted-foreground text-sm">{dir.description}</p>
                    {dir.exercises.length > 0 ? (
                      <span className="text-xs text-primary font-medium">
                        {dir.exercises.length} упражнений →
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground/50">Скоро появится</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!openDialog} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">{openDialog?.grade}</Badge>
            </div>
            <DialogTitle className="text-xl">
              {openDialog?.direction.title}
            </DialogTitle>
            <p className="text-muted-foreground text-sm">{openDialog?.direction.description}</p>
          </DialogHeader>

          {openDialog && openDialog.direction.exercises.length > 0 ? (
            <div className="flex flex-col gap-4 mt-2">
              {openDialog.direction.exercises.map((ex, i) => (
                <ExerciseCard key={i} exercise={ex} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
              <span className="text-4xl">📝</span>
              <p className="text-muted-foreground">Упражнения появятся после добавления контента</p>
            </div>
          )}

          <div className="pt-4">
            <Button variant="outline" onClick={() => setOpenDialog(null)} className="w-full">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}