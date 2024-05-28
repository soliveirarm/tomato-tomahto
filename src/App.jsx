import { useEffect, useRef, useState } from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import ToggleTimerBtn from "./components/ToggleTimerBtn"
import Timer from "./components/Timer"

const focusAudio = new Audio("audio/focus.mp3")
const breakAudio = new Audio("audio/break.mp3")

let colorClasses = {
  focus: "-focus",
  shortBreak: "-short-break",
  longBreak: "-long-break",
}

let color = colorClasses.focus

export default function App() {
  const [phase, setPhase] = useState("focus")
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  let longBreakInterval = useRef(1)
  let phaseTitle = useRef("Focus")
  let pomodoroCount = useRef(1)

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`

  const toggleTimer = () => setIsActive((prevIsActive) => !prevIsActive)

  const changePhase = (minutes, phase, title) => {
    setIsActive(false)
    setMinutes(minutes)
    setPhase(phase)
    phaseTitle.current = title
    color = colorClasses[phase]
  }

  useEffect(() => {
    let interval

    if (isActive && (seconds > 0 || minutes > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    } else if (minutes === 0 && seconds === 0) {
      switch (phase) {
        case "focus":
          if (longBreakInterval.current != 4) {
            changePhase(5, "shortBreak", "Short Break")
            breakAudio.play()
          } else {
            changePhase(15, "longBreak", "Long Break")
            breakAudio.play()
          }
          break
        case "shortBreak":
          changePhase(25, "focus", "Focus")
          pomodoroCount.current++
          longBreakInterval.current++
          focusAudio.play()
          break
        case "longBreak":
          changePhase(25, "focus", "Focus")
          pomodoroCount.current++
          longBreakInterval.current = 1
          focusAudio.play()
      }
    } else {
      clearInterval(interval)
    }

    let message = phase === "focus" ? "Focus Time" : "Break Time"

    document.title = `${formattedTime} - ${message}`

    return () => clearInterval(interval)
  }, [isActive, minutes, seconds, phase, formattedTime])
  return (
    <div className={`bg ${color} page-content`}>
      <Header />

      <Timer>
        <h2 className="capitalize text-2xl">{phaseTitle.current}</h2>
        <p className="text-7xl font-semibold text-center">{formattedTime}</p>
        <ToggleTimerBtn
          started={isActive}
          onClick={toggleTimer}
          color={color}
        />
        <p className="bg-slate-100 py-2 px-4 text-slate-800 text-xl text-center rounded-md font-light">
          How many 🍅 you have:{" "}
          <span className="font-normal">{pomodoroCount.current}</span>
        </p>
      </Timer>

      <Footer />
    </div>
  )
}
