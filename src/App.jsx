import { useEffect, useRef, useState } from "react"

import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"

import { PhaseTitle } from "./components/PhaseTitle"
import { Timer } from "./components/Timer"
import { ToggleTimer } from "./components/ToggleTimer/ToggleTimer"
import { SkipPhase } from "./components/SkipPhase"
import { PomodoroCounter } from "./components/PomodoroCounter"
import { ResetCounterMenu } from "./components/ResetCounterMenu"

import { useToggleTimerShortcut } from "./hooks/useToggleTimerShortcut"

const focusAudio = new Audio("audio/focus.mp3")
const breakAudio = new Audio("audio/break.mp3")

const colorClasses = {
  focus: "-focus",
  shortBreak: "-short-break",
  longBreak: "-long-break",
}

let color = colorClasses.focus

export const App = () => {
  // States
  const [phase, setPhase] = useState("focus")
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [timerStarted, setTimerStarted] = useState(false)
  const [pomodoroCounter, setPomodoroCounter] = useState(
    +localStorage.tt_pomo_count || 1
  )
  const [resetMenu, setResetMenu] = useState(false)

  // Refs
  const longBreakInterval = useRef(1)
  const phaseTitle = useRef("Focus")

  // Functions
  const addZeros = (s) => s.padStart(2, "0")
  const formattedTime = `${addZeros(minutes.toString())}:${addZeros(
    seconds.toString()
  )}`

  const toggleTimer = () => setTimerStarted((current) => !current)

  const changePhase = (minutes, phase, title) => {
    setTimerStarted(false)
    setMinutes(minutes)
    setPhase(phase)
    phaseTitle.current = title
    color = colorClasses[phase]
  }

  const resetCounter = () => {
    setPomodoroCounter(1)
    setResetMenu(false)
  }
  const incrementCounter = () => setPomodoroCounter((current) => current + 1)

  const skipPhase = () => {
    if (phase === "focus") {
      if (longBreakInterval.current != 4) {
        changePhase(5, "shortBreak", "Short Break")
      } else {
        changePhase(15, "longBreak", "Long Break")
      }
    } else if (phase === "shortBreak") {
      changePhase(25, "focus", "Focus")
      incrementCounter()
      longBreakInterval.current++
    } else if (phase === "longBreak") {
      changePhase(25, "focus", "Focus")
      incrementCounter()
      longBreakInterval.current = 1
    }
    setSeconds(0)
  }

  // useEffects/hooks
  useToggleTimerShortcut({ toggleTimer })

  useEffect(() => {
    localStorage.tt_pomo_count = pomodoroCounter
  }, [pomodoroCounter])

  useEffect(() => {
    let interval

    if (timerStarted && (seconds > 0 || minutes > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else setSeconds(seconds - 1)
      }, 1000)
    } else if (minutes === 0 && seconds === 0) {
      switch (phase) {
        case "focus":
          if (longBreakInterval.current != 4) {
            changePhase(5, "shortBreak", "Short Break")
          } else {
            changePhase(15, "longBreak", "Long Break")
          }
          breakAudio.play()
          break
        case "shortBreak":
          changePhase(25, "focus", "Focus")
          incrementCounter()
          longBreakInterval.current++
          focusAudio.play()
          break
        case "longBreak":
          changePhase(25, "focus", "Focus")
          incrementCounter()
          longBreakInterval.current = 1
          focusAudio.play()
      }
    } else {
      clearInterval(interval)
    }

    let message = phase === "focus" ? "Focus Time" : "Break Time"

    document.title = `${formattedTime} - ${message}`

    return () => clearInterval(interval)
  }, [timerStarted, minutes, seconds, phase, formattedTime])

  return (
    <div className={`page-content ${color}`}>
      <Header />
      <Main>
        <PhaseTitle title={phaseTitle.current} />
        <Timer timer={formattedTime} />
        <ToggleTimer
          started={timerStarted}
          onClick={toggleTimer}
          color={color}
        />
        <SkipPhase skipPhase={skipPhase} />
        <PomodoroCounter
          counter={pomodoroCounter}
          openResetCounterMenu={() => setResetMenu(true)}
        />
        <ResetCounterMenu
          resetCounter={resetCounter}
          menuIsOpen={resetMenu}
          closeMenu={() => setResetMenu(false)}
        />
      </Main>
      <Footer />
    </div>
  )
}
