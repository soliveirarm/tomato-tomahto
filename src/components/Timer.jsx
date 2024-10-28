export default function Timer({ color, timer }) {
  return (
    <p className={`text-7xl font-medium text-center timer-text ${color}`}>
      {timer}
    </p>
  )
}
