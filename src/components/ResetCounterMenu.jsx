export const ResetCounterMenu = ({ resetCounter, menuIsOpen, closeMenu }) => (
  <div
    className={`${
      !menuIsOpen && "hidden"
    } absolute p-8 bg-slate-100 shadow-inner shadow-slate-200 text-slate-800 w-80 h-64 rounded-md flex flex-col justify-between`}
  >
    <p className="text-xl font-light">
      Are you sure you wanna <span className="font-bold">reset</span> your
      pomodoro counter?
    </p>
    <span className="flex items-center gap-2 self-end">
      <button
        onClick={closeMenu}
        className="bg-slate-300 text-slate-600 px-4 py-2 rounded-md"
      >
        No
      </button>
      <button
        onClick={resetCounter}
        className="py-2 px-4 text-white  bg-red-600 rounded-md transition-all hover:scale-110 active:bg-slate-200"
      >
        Yes
      </button>
    </span>
  </div>
)
