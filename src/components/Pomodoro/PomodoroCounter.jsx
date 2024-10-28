export default function PomodoroCounter({ counter }) {
  return (
    <span className="flex items-center gap-2 bg-slate-100 py-2 px-4 text-slate-800 text-xl text-center rounded-md dark:bg-slate-700 dark:text-white">
      <div>🍅</div>
      <div>{counter}</div>
    </span>
  )
}
