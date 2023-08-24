import HeroSection from "./componets/hero/HeroSection.js.";
import NavBar from "./componets/navbar/Navbar";
import Products from "./componets/products/products";
import Section from "./componets/section/Section";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Section />
      <Products/>
    </div>
  );
}

export default App;
