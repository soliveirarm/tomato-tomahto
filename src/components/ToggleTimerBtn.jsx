/* eslint-disable react/prop-types */
import { FaPlay, FaPause } from "react-icons/fa"

export default function ToggleTimerBtn({ onClick, isActive }) {
  return (
    <button
      className="flex justify-center items-center text-3xl  w-40 h-16 rounded-lg  transition-all text-white bg-transparent border-2 border-white hover:scale-110"
      onClick={onClick}
    >
      {isActive ? <FaPause /> : <FaPlay />}
    </button>
  )
}
