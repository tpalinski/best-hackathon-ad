import ReactDOM from 'react-dom/client'
import './index.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
import gsap from 'gsap'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './screens/welcome/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>
  }
])


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
