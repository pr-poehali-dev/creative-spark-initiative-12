export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Логотип сайта" role="img">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="10" height="10" rx="2" fill="#EEBBC3" />
        <rect x="16" y="2" width="10" height="10" rx="2" fill="#EEBBC3" opacity="0.7" />
        <rect x="2" y="16" width="10" height="10" rx="2" fill="#EEBBC3" opacity="0.7" />
        <rect x="16" y="16" width="10" height="10" rx="2" fill="#EEBBC3" />
      </svg>
      <span className="text-base font-bold text-foreground leading-tight max-w-[180px]">
        Сборник креативных упражнений
      </span>
    </div>
  )
}
