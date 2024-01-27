import Cards from "./components/Cards";
import Courses from "./components/Courses";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Cards/>
      <Facts/>
      <Features/>
      <Courses/>
    </div>
  );
}

export default App;
