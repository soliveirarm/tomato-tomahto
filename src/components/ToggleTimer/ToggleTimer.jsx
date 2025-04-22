import { LuPause, LuPlay } from "react-icons/lu"
import "./ToggleTimer.css"

export const ToggleTimer = ({ onClick, started, color }) => (
  <button
    className={`toggle-timer ${color} ${started ? "-started" : ""}`}
    onClick={onClick}
  >
    <span className={`icon ${color}`}>
      {started && <LuPause />}
      {!started && <LuPlay />}
    </span>
  </button>
)
