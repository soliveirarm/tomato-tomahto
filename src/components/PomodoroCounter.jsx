export const PomodoroCounter = ({ counter, openResetCounterMenu }) => (
  <span
    onClick={openResetCounterMenu}
    className="flex items-center gap-2 bg-slate-100 py-2 px-5 text-slate-800 text-xl text-center rounded-full cursor-pointer white hover:scale-110"
  >
    <div>🍅</div>
    <div>{counter}</div>
  </span>
)
