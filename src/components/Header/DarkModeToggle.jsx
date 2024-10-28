import { LuMoon, LuSunMedium } from "react-icons/lu"

export default function DarkModeToggle() {
  const toggleMode = () => {
    document.querySelector("html").classList.toggle("dark")
  }

  return (
    <div
      onClick={toggleMode}
      className="flex justify-between items-center gap-4 bg-slate-300 p-1 rounded-full transition-all shadow-inner shadow-slate-200 relative z-10 cursor-pointer dark:bg-slate-800 dark:shadow-slate-700"
    >
      <span className="absolute left-[5px] size-6 bg-slate-200 dark:bg-slate-600 rounded-full -z-10 transition-all dark:left-[47px]"></span>
      <button className="p-1 z-20">
        <LuSunMedium size={18} />
      </button>
      <button className="p-1 z-20">
        <LuMoon size={18} />
      </button>
    </div>
  )
}
