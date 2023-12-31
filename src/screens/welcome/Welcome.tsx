import { Hero } from "./Hero"
import { Wrapper } from "./Wrapper"

export const Welcome = () => {
  return (
    <div className="relative welcome-wrapper">
      <Hero/>
      <Wrapper/>
    </div>
  )
}
