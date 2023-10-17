import Header from "./Header"
import Cuerpo from "./cuerpo"
import Footer from "./footer"
import NavBar from "./components/NavBar.jsx"
import CartWidget from "./components/CartWidget"
import Contenedor from "./components/contenedor"
function App() {
return (
  <>
  <NavBar/>
  
  <Contenedor greeting="Bienveniedo a Caro y Puro"/>

  <Header/>

  <Cuerpo/>

  <Footer/>
  </>
)
  }

export default App
