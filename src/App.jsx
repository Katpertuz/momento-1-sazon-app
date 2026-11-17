import './App.css';

import Banner from "./components/Banner"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <>

     <div className="layout-app">
     
      <NavBar />

      
      <main className="contenido-principal">
        <Banner />
      </main>

     
      <Footer />
    </div>

      
    </>
  )
}
export default App
