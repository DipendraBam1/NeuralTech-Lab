import Footer from '@/components/layout/Footer'
import AboutUS from '@/components/sections/AboutUS'
import Clients from '@/components/sections/Clients'
import Hero from '@/components/sections/Hero'
 import Services from '@/components/sections/Services'
import TopServices from '@/components/sections/TopServices'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <TopServices/>
      <AboutUS/>
      <Footer/>
     </>
  )
}
