import { LuPause, LuPlay } from "react-icons/lu"

export default function ToggleTimerBtn({ onClick, started, color }) {
  return (
    <button
      className={`btn ${color} ${started ? "-started" : ""}`}
      onClick={onClick}
    >
      {started ? <LuPause /> : <LuPlay />}
    </button>
  )
}
