import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'
//import Navbar from '../../components/Navbar'



export default function Home() {
  return (
   <main>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </main>
  )
}
