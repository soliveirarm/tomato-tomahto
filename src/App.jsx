import { useEffect, useRef, useState } from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import ToggleTimerBtn from "./components/ToggleTimerBtn"

let colorClasses = {
  focus: "-focus",
  shortBreak: "-short-break",
  longBreak: "-long-break",
}

let color = colorClasses.focus

export default function App() {
  const [phase, setPhase] = useState("focus")
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(5)
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
            changePhase(0, "shortBreak", "Short Break")
            setSeconds(3)
          } else {
            changePhase(0, "longBreak", "Long Break")
            setSeconds(7)
          }
          break
        case "shortBreak":
          changePhase(0, "focus", "Focus")
          setSeconds(5)
          pomodoroCount.current++
          longBreakInterval.current++
          break
        case "longBreak":
          changePhase(0, "focus", "Focus")
          setSeconds(5)
          pomodoroCount.current++
          longBreakInterval.current = 1
      }
    } else {
      clearInterval(interval)
    }

    if (isActive) document.title = formattedTime
    else document.title = "Pomodoro"

    return () => clearInterval(interval)
  }, [isActive, minutes, seconds, phase, formattedTime])
  return (
    <div className={`bg ${color} page-content`}>
      <Header />

      <section className="cursor-default max-w-screen-md md:mx-auto md:w-full m-2 transition ease-in-out text-white flex flex-col gap-8 justify-evenly items-center h-96  rounded-xl p-6">
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
      </section>

      <Footer />
    </div>
  )
}
