
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import './App.css';

const App = () => {
  return (
    <div className="layout-app">
      <NavBar />

      <main className="contenido-principal">
        <Home />
        
        
      </main>

      <Footer />
    </div>
  );
};

export default App;