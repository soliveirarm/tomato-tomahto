import Timer from "./components/Timer"

export default function App() {
  return (
    <>
      <header className="p-8">
        <h1 className=" font-semibold text-3xl text-center tracking-wide">
          Pomodoro Timer
        </h1>
      </header>

      <Timer />

      <footer className="p-3 text-center font-medium">
        Developed by{" "}
        <a
          href="https://github.com/soliveirarm"
          target="_blank"
          className="underline hover:text-red-600  transition-all"
        >
          Sarah Oliveira
        </a>
      </footer>
    </>
  )
}
