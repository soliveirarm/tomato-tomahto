import { LuSkipForward } from "react-icons/lu"

export const SkipPhase = ({ skipPhase }) => (
  <button
    onClick={skipPhase}
    className="flex items-center gap-2 p-4 hover:scale-115 transition-all"
  >
    <LuSkipForward size={24} />
    <p className="text-lg">Skip</p>
  </button>
)
