import { BrownNoise } from "./BrownNoise"

export const Footer = () => (
  <footer className="flex flex-wrap justify-between items-center gap-4 content-center py-4 px-8 text-lg">
    <BrownNoise />
    <span>
      Developed by{" "}
      <a
        href="https://github.com/soliveirarm"
        target="_blank"
        className="underline hover:text-xl transition-all"
      >
        Sarah Oliveira
      </a>
    </span>
  </footer>
)
