import "./App.css"
import Chair from "./components/chairs/Chair";
import Choose from "./components/Choose/Choose";
import Help from "./components/Help/Help";
import Hero from "./components/hero/Hero";
import NavBar from './components/navbar/NavBar';
import Product from "./components/product/Product";
function App() {
  return (
    <>
    
    <NavBar/>
    <Hero/>
    <Product/>
    <Choose/>
    <Help></Help>
    <Chair/>
    </>
  )
}

export default App
