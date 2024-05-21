import { useEffect, useRef, useState } from "react"
import ToggleTimerBtn from "./ToggleTimerBtn"

let colors = {
  focus: "bg-gradient-to-b from-red-500 to-red-600",
  shortBreak: "bg-gradient-to-b from-green-500 to-green-600",
  longBreak: "bg-gradient-to-b from-violet-500 to-violet-600",
}

let bgColor = colors.focus

export default function Timer() {
  const [phase, setPhase] = useState("focus")
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [pomodoroCount, setPomodoroCount] = useState(1)

  let longBreakInterval = useRef(1)

  const toggleTimer = () => setIsActive((prevIsActive) => !prevIsActive)

  const setTimerAndPhase = (minutes, phase) => {
    setIsActive(false)
    setMinutes(minutes)
    setPhase(phase)
  }

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`

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
            setTimerAndPhase(5, "short break")
            bgColor = colors.shortBreak
          } else {
            setTimerAndPhase(15, "long break")
            bgColor = colors.longBreak
          }
          break
        case "short break":
          setTimerAndPhase(25, "focus")
          setPomodoroCount(pomodoroCount + 1)
          longBreakInterval.current++
          bgColor = colors.focus
          break
        case "long break":
          setTimerAndPhase(25, "focus")
          longBreakInterval.current = 1
          bgColor = colors.focus
      }
    } else {
      clearInterval(interval)
    }

    if (isActive) document.title = formattedTime
    else document.title = "Pomodoro"

    return () => clearInterval(interval)
  }, [isActive, minutes, seconds, phase, formattedTime, pomodoroCount])

  return (
    <section
      className={`${bgColor} cursor-default max-w-screen-md md:mx-auto md:w-full m-2 transition ease-in-out text-white flex flex-col gap-8 justify-evenly items-center h-96  rounded-xl p-6`}
    >
      <h2 className="capitalize text-2xl">{phase}</h2>

      <p className="text-7xl font-semibold text-center">{formattedTime}</p>

      <ToggleTimerBtn isActive={isActive} onClick={toggleTimer} />

      <p className="bg-slate-100 py-2 px-4 text-slate-800 text-xl rounded-md font-light">
        How many 🍅 you have: {pomodoroCount}
      </p>
    </section>
  )
}
