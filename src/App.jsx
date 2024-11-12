// import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Subscribe from './components/Subscribe'

export default function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
      <Footer/>
    </main>
  )
}