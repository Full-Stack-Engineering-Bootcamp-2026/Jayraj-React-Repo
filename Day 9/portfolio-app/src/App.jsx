import { BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Players from "./pages/Players"
import Contact from "./pages/Contact"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/players" element={<Players />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
