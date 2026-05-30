export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="СмартФлоу логотип" role="img">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4C2.6 4.5 3.2 5 4.5 5C7 5 7 3 9.5 3C12.1 3 11.9 5 14.5 5C17 5 17 3 19.5 3C20.8 3 21.4 3.5 22 4M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C12.1 11 11.9 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12M2 20C2.6 20.5 3.2 21 4.5 21C7 21 7 19 9.5 19C12.1 19 11.9 21 14.5 21C17 21 17 19 19.5 19C20.8 19 21.4 19.5 22 20"
          stroke="#EEBBC3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-bold text-foreground">СмартФлоу</span>
    </div>
  )
}
