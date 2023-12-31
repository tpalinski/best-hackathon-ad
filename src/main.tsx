import ReactDOM from 'react-dom/client'
import './index.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
import gsap from 'gsap'
import { Root } from './screens/welcome/Root'



gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Root/>
)
