import { LuPause, LuPlay } from "react-icons/lu"

import { useRef, useState } from "react"

export const BrownNoise = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const brownNoise = useRef(new Audio("audio/brown-noise.mp3"))

  const toggleBrownNoise = () => {
    if (!isPlaying) {
      brownNoise.current.play()
      brownNoise.current.loop = true
    } else brownNoise.current.pause()
    setIsPlaying((prev) => !prev)
  }

  const handleVolumeChange = (e) => {
    const { value } = e.target
    setVolume(value)
    brownNoise.current.volume = value
  }

  return (
    <div className="flex justify-center items-center gap-4 p-2">
      <span className="text font-medium">Brown Noise</span>

      <span className="flex items-center gap-2">
        <button
          className="text-2xl hover:scale-110 active:opacity-70"
          onClick={toggleBrownNoise}
        >
          {isPlaying && <LuPause />}
          {!isPlaying && <LuPlay />}
        </button>
        {isPlaying && (
          <input
            className="brown-noise"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
          />
        )}
      </span>
    </div>
  )
}
