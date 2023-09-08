import HeroSection from "./componets/hero/HeroSection.js.";
import NavBar from "./componets/navbar/Navbar";
import Products from "./componets/products/products";
import Section from "./componets/section/Section";
import VideoSection from "./componets/video/VideoSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Section />
      <Products/>
      <VideoSection/>
      <Section />

    </div>
  );
}

export default App;
