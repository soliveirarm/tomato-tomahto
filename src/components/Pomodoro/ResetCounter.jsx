import { RxReset } from "react-icons/rx"

export default function ResetCounter({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 py-2 px-4 text-slate-800  bg-slate-100 border-b-4  border-slate-300 rounded-md transition-all hover:scale-110 active:bg-slate-200 dark:bg-slate-700 dark:border-slate-400 dark:text-white"
    >
      <RxReset /> Reset counter
    </button>
  )
}
