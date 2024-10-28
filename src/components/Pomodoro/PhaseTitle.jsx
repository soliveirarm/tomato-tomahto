import "../../styles/color-changing-text.css"

export default function PhaseTitle({ title, color }) {
  return (
    <h2 className={`capitalize text-2xl color-changing-text ${color}`}>
      {title}
    </h2>
  )
}
