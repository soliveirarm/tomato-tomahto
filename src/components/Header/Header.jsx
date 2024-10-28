import DarkModeToggle from "./DarkModeToggle"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 sm:p-8">
      <h1 className=" font-medium text-2xl sm:text-3xl text-center tracking-wide">
        Tomayto Tomahto
      </h1>
      <DarkModeToggle />
    </header>
  )
}
