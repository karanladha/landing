import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import {Routes} from "react-router-dom";
import Slider from "./components/Slider";
import Footer from './components/Footer';
import Feature from "./components/Feature"
function App() {
  return (
    
    <><div>
      <Navbar />
    </div>
    <div>
        <Slider />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <Footer />
      </div></>
  );
}

export default App;
