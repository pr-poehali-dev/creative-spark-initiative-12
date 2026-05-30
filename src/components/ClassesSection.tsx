import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const CLASSES = [
  {
    id: "class-1",
    grade: "1 класс",
    emoji: "🌱",
    color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconColor: "text-rose-400",
    directions: [
      { id: 1, icon: "Pencil", title: "Направление 1", description: "Описание появится после добавления контента" },
      { id: 2, icon: "BookOpen", title: "Направление 2", description: "Описание появится после добавления контента" },
      { id: 3, icon: "Star", title: "Направление 3", description: "Описание появится после добавления контента" },
      { id: 4, icon: "Lightbulb", title: "Направление 4", description: "Описание появится после добавления контента" },
    ],
  },
  {
    id: "class-2",
    grade: "2 класс",
    emoji: "🌿",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconColor: "text-blue-400",
    directions: [
      { id: 1, icon: "Pencil", title: "Направление 1", description: "Описание появится после добавления контента" },
      { id: 2, icon: "BookOpen", title: "Направление 2", description: "Описание появится после добавления контента" },
      { id: 3, icon: "Star", title: "Направление 3", description: "Описание появится после добавления контента" },
      { id: 4, icon: "Lightbulb", title: "Направление 4", description: "Описание появится после добавления контента" },
    ],
  },
  {
    id: "class-3",
    grade: "3 класс",
    emoji: "🌳",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconColor: "text-amber-400",
    directions: [
      { id: 1, icon: "Pencil", title: "Направление 1", description: "Описание появится после добавления контента" },
      { id: 2, icon: "BookOpen", title: "Направление 2", description: "Описание появится после добавления контента" },
      { id: 3, icon: "Star", title: "Направление 3", description: "Описание появится после добавления контента" },
      { id: 4, icon: "Lightbulb", title: "Направление 4", description: "Описание появится после добавления контента" },
    ],
  },
  {
    id: "class-4",
    grade: "4 класс",
    emoji: "🏆",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconColor: "text-purple-400",
    directions: [
      { id: 1, icon: "Pencil", title: "Направление 1", description: "Описание появится после добавления контента" },
      { id: 2, icon: "BookOpen", title: "Направление 2", description: "Описание появится после добавления контента" },
      { id: 3, icon: "Star", title: "Направление 3", description: "Описание появится после добавления контента" },
      { id: 4, icon: "Lightbulb", title: "Направление 4", description: "Описание появится после добавления контента" },
    ],
  },
]

export function ClassesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container px-6 mx-auto flex flex-col gap-16">
        {CLASSES.map((cls) => (
          <div key={cls.id} id={cls.id} className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{cls.emoji}</span>
              <div>
                <Badge variant="outline" className={`mb-1 ${cls.color}`}>
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
                  className="bg-card border-border hover:border-primary/40 transition-colors cursor-pointer group"
                >
                  <CardHeader className="pb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${cls.color}`}>
                      <Icon name={dir.icon as "Pencil"} size={20} className={cls.iconColor} />
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {dir.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{dir.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
