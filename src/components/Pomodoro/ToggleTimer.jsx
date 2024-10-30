import { LuPause, LuPlay } from "react-icons/lu"
import "../../styles/ToggleTimer.css"

export default function ToggleTimer({ onClick, started, color }) {
  return (
    <button
      className={`toggle-timer ${color} ${started ? "-started" : ""}`}
      onClick={onClick}
    >
      {started && <LuPause />}
      {!started && <LuPlay />}
    </button>
  )
}
