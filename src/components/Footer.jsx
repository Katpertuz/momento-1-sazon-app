import estilos from './Footer.module.css'
import corona from '../assets/corona.svg'
import doria from '../assets/doriapng.png'
import jet from '../assets/jet.svg'
import pietran from '../assets/pietra.png'
import zenu from '../assets/zenu.png'

 const Footer = () => {
  return (

    <footer className={estilos.Footer}>

    <div><h3 className={estilos.texto}>Equipo de Desarrollo Sa·zón</h3>
    <p className={estilos.copyright}>Copyright © 2026 Grupo Nutresa · Todos los derechos reservados</p>
    </div>

    <div className={estilos.logosContenedor}>
      <div className={estilos.CajaLogo}>
        <img src={corona} alt="Logo corona" className={estilos.icorona} />
        <img src={doria} alt="Logo doria" className={estilos.idoria} />
        <img src={jet} alt="Logo jet" className={estilos.ijet} />
        <img src={pietran} alt="Logo pietran" className={estilos.ipietran} />
        <img src={zenu} alt="Logo zenu" className={estilos.izenu} />
      </div> 

    </div>


    </footer> 
  )
}
export default Footer
