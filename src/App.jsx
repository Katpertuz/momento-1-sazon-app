import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Productcard from "./components/Productcard";
import './App.css';

const App = () => {
  return (
    <div className="layout-app">
      <NavBar />

      <main className="contenido-principal">
        <Banner />
        
        <Productcard />
      </main>

      <Footer />
    </div>
  );
};

export default App;