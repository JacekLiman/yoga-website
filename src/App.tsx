import Cards from "./components/Cards";
import Courses from "./components/Courses";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";

function App() {
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
    </div>
  );
}

export default App;
