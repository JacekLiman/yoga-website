import { useEffect } from "react";

import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";

import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    Aos.init({
      duration:1800,
      offset:100
    })
  },[])

  return (
    <div>
      <Header/>
      <Hero />
      <Cards/>
      <Facts/>
      <Features/>
      <Courses/>
      <Pricing/>
      <Newsletter/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
