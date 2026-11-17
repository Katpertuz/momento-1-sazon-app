import estilos from './Navbar.module.css';
import menu from '../assets/images/menu.png'
import logo from '../assets/logo/logo.png'
import avatar from '../assets/inicio-sesion/avatar.jpeg'
import campana from '../assets/inicio-sesion/campana.png'

 const NavBar = () => {
  return (
    <header className={estilos.header}>
      <div className={estilos.bloqueIzquierdo}>
        <div className={estilos.button}>

        </div>
        <button type="button" className={estilos.buttonMenu} aria-label="Abrir Menú">
          <img src={menu} alt="menu" className={estilos.menu}/>
          <span className={estilos.textoMenu}>MENÚ</span>
        </button>
      </div>

      <div>
        <img src={logo} alt="logo sazon" className={estilos.logoSazon}/>
      </div>


      <div className={estilos.bloqueCentral}>
        <form className={estilos.buscador} onSubmit={(e) => e.preventDefault()}>
        <input 
        type="search"
        placeholder="Buscar recetas, productos, modulos..." 
        className={estilos.inputBuscador}
        />
      </form>


      </div>
      

      <div className={estilos.bloqueDerecha}>
         <div>
          <button type="button" className={estilos.botonCampana}aria-label="Notificaciones"> 
            <img src={campana} alt="notificaciones" className={estilos.campana} />
            <span className={estilos.badgeAlerta}></span>
        </button>
          
          </div>  
        

        <div>
          <button type="button" className={estilos.buttonInicioSesion}>
          <span className={estilos.inicioSesion}>Iniciar sesión</span>
          <img src={avatar} alt="avatar" className={estilos.inicioLogo}/>
        </button>
        </div>

      </div>
    </header>
  )
}
export default NavBar
