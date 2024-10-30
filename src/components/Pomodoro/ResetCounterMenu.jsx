export default function ResetCounterMenu({
  resetCounter,
  menuIsOpen,
  closeMenu,
}) {
  return (
    <div
      className={`${
        !menuIsOpen && "hidden"
      } absolute p-8 bg-slate-200 shadow-inner shadow-slate-100 text-slate-800 w-80 h-64 rounded-md flex flex-col justify-between dark:bg-slate-800 dark:text-white dark:shadow-slate-700`}
    >
      <p className="text-xl font-light">
        Are you sure you wanna reset your pomodoro counter?
      </p>
      <span className="flex items-center gap-2 self-end">
        <button
          onClick={closeMenu}
          className="bg-slate-300 text-slate-600 px-4 py-2 rounded-md dark:bg-slate-900 dark:text-slate-200"
        >
          No
        </button>
        <button
          onClick={resetCounter}
          className="py-2 px-4 text-white  bg-green-500 rounded-md transition-all hover:scale-110 active:bg-slate-200 dark:bg-green-400 dark:text-black"
        >
          Yes
        </button>
      </span>
    </div>
  )
}
