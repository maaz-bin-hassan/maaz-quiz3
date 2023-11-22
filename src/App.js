import './App.css';
import NavScrollExample from "./components/Navbar";
import ShapeExample from './components/shape';
import carousel from './components/carousel';
import Footer from './components/Footer';
import Statistics from "./components/Statistics";
import SecurityUpdate from "./components/SecurityUpdate";
import Slides from './components/carousel';
import { HeroSection } from './components/herosection';
function App() {
  return (
    <div >
      
        <NavScrollExample />
        <Slides />
        <ShapeExample />
        <HeroSection/>
        <Statistics />
        <SecurityUpdate />
        <Footer />

    </div>
  );
}

export default App;
