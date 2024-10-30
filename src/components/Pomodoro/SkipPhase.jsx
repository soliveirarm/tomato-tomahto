import { LuSkipForward } from "react-icons/lu"

export default function SkipPhase({ skipPhase }) {
  return (
    <button
      onClick={skipPhase}
      className="flex items-center gap-2 cursor-pointer text-slate-600 bg-slate-100 px-4 py-2 rounded-md  hover:scale-110 transition-all hover:bg-slate-600 hover:text-slate-100 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-100 dark:hover:text-slate-600"
    >
      <LuSkipForward size={24} />
      <p className="text-lg">Skip</p>
    </button>
  )
}
