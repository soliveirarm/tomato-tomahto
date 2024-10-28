import "../../styles/color-changing-text.css"

export default function Timer({ color, timer }) {
  return (
    <p
      className={`text-7xl font-medium text-center color-changing-text ${color}`}
    >
      {timer}
    </p>
  )
}
