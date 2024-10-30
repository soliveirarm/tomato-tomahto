import ToggleTimer from "./ToggleTimer"
import ResetCounterMenu from "./ResetCounterMenu"
import PomodoroCounter from "./PomodoroCounter"
import PhaseTitle from "./PhaseTitle"
import Timer from "./Timer"
import SkipPhase from "./SkipPhase"

export default function Pomodoro({
  color,
  phaseTitle,
  timer,
  started,
  toggleTimer,
  skipPhase,
  counter,
  openResetCounterMenu,
  resetCounter,
  menuIsOpen,
  closeMenu,
}) {
  return (
    <main className="cursor-default max-w-screen-md md:mx-auto md:w-full m-2 transition ease-in-out text-white flex flex-col gap-8 justify-evenly items-center rounded-xl p-6">
      <PhaseTitle color={color} title={phaseTitle} />
      <Timer color={color} timer={timer} />
      <ToggleTimer started={started} onClick={toggleTimer} color={color} />
      <SkipPhase skipPhase={skipPhase} />
      <PomodoroCounter
        counter={counter}
        openResetCounterMenu={openResetCounterMenu}
      />
      <ResetCounterMenu
        resetCounter={resetCounter}
        menuIsOpen={menuIsOpen}
        closeMenu={closeMenu}
      />
    </main>
  )
}
