/* eslint-disable react/prop-types */
import { FaPlay, FaPause } from "react-icons/fa"

export default function ToggleTimerBtn({ onClick, started, color }) {
  return (
    <button className={`btn ${started ? "-started" : color}`} onClick={onClick}>
      {started ? <FaPause /> : <FaPlay />}
    </button>
  )
}
