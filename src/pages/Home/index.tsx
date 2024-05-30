import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import MiddelBar from "@/components/MiddelBar"
import SecondMiddleBar from "@/components/SecondMiddleBar"
import ThirdMIddleBar from "@/components/ThirdMIddleBar"

const Home = () => {
  return (
    <main className="z-50">
      <Header/>
      <Hero/>
      <MiddelBar/>
      <SecondMiddleBar/>
      <ThirdMIddleBar/>
      <Footer/>
    </main>
  )
}

export default Home