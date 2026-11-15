import estilos from './Footer.module.css'
import corona from '../assets/images/corona.svg'
import doria from '../assets/images/doriapng.png'
import jet from '../assets/images/jet.svg'
import pietran from '../assets/images/pietran.png'
import zenu from '../assets/images/zenu.png'

const listaLogos=[corona, doria, jet, pietran, zenu];

 const Footer = () => {
  return (

    <footer className={estilos.Footer}>

    <div><h3 className={estilos.texto}>Equipo de Desarrollo Sa·zón</h3>
    <p className={estilos.copyright}>Copyright © 2026 Grupo Nutresa · Todos los derechos reservados</p>
    </div>

    <div className={estilos.logosContenedor}>
      {listaLogos.map((logo,index)=>(
        <div key={index}className={estilos.cajaLogo}>
          <img src={logo} alt={`Logo ${index+1}`} className={estilos.imagen} />
        </div>

      )
      
      )}
      
    </div>


    </footer> 
  )
}
export default Footer
