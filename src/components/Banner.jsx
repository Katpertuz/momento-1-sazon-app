import estilos from './Banner.module.css'
import banner from '../assets/images/fondo-dos.png'
const Banner = () => {
  return (
    <div className={estilos.fondoDos}>
        <section className={estilos.seccionBanner}>
           <img src={banner} alt="fondo" className={estilos.bannerImage}/>
             <div className={estilos.overlayTexto}>
          <div className={estilos.contenido}>
            <h1 className={estilos.titulo}>
              ¡Dale el mejor sa.zón a tus días!
            </h1>
            <p className={estilos.subtitulo}>
              Cocina momentos inolvidables con tus productos favoritos
            </p>
          </div>
        </div>
        
        
        </section>


    </div>
  )
}
export default Banner
