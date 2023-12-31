import { useGSAP } from "@gsap/react"
import { HorizontalScroll } from "./HorizontalScroll"
import { Welcome } from "./Welcome"
import gsap from 'gsap'
import { useDarkMode } from "../../utils"

export const Root = () => {

  useDarkMode({dark: 'black', light: 'pastel'})
    
  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: "#page-content",
        pin: true,
        start: "top top",
        end: "+=500%",
        scrub: 1,
        invalidateOnRefresh: true,
      }, defaults: {
        ease: "none"
      }
    })
    .to("#neon", {
        opacity: 0
      }, "start")
    .to("#city-background", {
        opacity: 1
      })
    .to("#city-background", {
        filter: 'grayscale(0)',
        ease: "slow(0.7,0.7,false)"
      })
    .to('#wrapper-text', {
        opacity: 1
      }, "<")
    .to("#wrapper-text h2", {
        text: "We"
      })
    .to("#wrapper-text h1", {
        text: "make it"
      })
    .to("#wrapper-text h3", {
        text: "wiser"
      })
    gsap.timeline({
      scrollTrigger: {
         trigger: '.h-container',
         start: 'top top',
         end: '+=800%',
         scrub: true,
         pin: true,
        anticipatePin: 1,
      }, 
    })
    .from('.h-panel-2', {
        xPercent: -100,
      })
    .from('.h-panel-3', {
        visibility: 'hidden',
      }, "<")
    .from('.h-panel-3', {
        yPercent: -100,
      })
    .to('.lightbulb', {
        scaleY: 0.00001,
        yPercent: 50
      }, "<")
    .to('.lightbulb div', {
        opacity: 0
      }, "<")
    .from('.h-panel-4', {
        yPercent: 100,
      })

  })

  return (
    <div id='animation-wrapper' className='relative'>
      <Welcome/>
      <HorizontalScroll/>
      <div className='h-screen w-full bg-base-100 flex flex-col items-center justify-center relative text-center'>
        <h1 className='text-6xl font-cyberpunk'> Vote </h1>
        <h1 className='text-6xl font-cyberpunk text-violet-600'> #wise_city </h1>
        <h1 className='text-6xl font-cyberpunk'> for your Best Coding Marathon 2024 winner </h1>
      </div>
    </div>
  )
}
