import estilos from './ProductCard.module.css'
import catalogo from '../data/Catalogo.js';




 const Productcard = () => {
  
 
  return (
    <>
    <section className={estilos.contenedorCatalogo}> 
      <h2 className={estilos.tituloSeccion}>Nuestros Productos</h2>

      <div className={estilos.grid}>
        {catalogo.productos
          .filter((producto) => producto.activo)
          .map((producto) => {
            
            const marca = catalogo.marcas.find(
              (m) => m.id === producto.idMarca
            );

            
            const imagen = catalogo.imagenesProducto.find(
              (img) => img.idProducto === producto.id && img.esPrincipal
            );

            
            const presentacion = catalogo.presentaciones.find(
              (pres) => pres.idProducto === producto.id
            );

            return (
              <article key={producto.id} className={estilos.tarjeta}>
                
                <div className={estilos.contenedorImagen}>
                  <img
                    src={imagen?.url}
                    alt={imagen?.textoAlternativo || producto.nombre}
                    className={estilos.imagen}
                    loading="lazy"
                  />
                </div>

                
                <div className={estilos.informacion}>
                  <span className={estilos.marca}>
                    {marca ? marca.nombre : 'Nutresa'}
                  </span>
                  <h3 className={estilos.nombre}>{producto.nombre}</h3>

                  {presentacion && (
                    <p className={estilos.presentacion}>
                      {presentacion.descripcion} ({presentacion.contenidoNeto}
                      {presentacion.unidadMedida})
                    </p>
                  )}

                  <p className={estilos.precio}>
                    $
                    {(presentacion
                      ? presentacion.precio
                      : producto.precioReferencia
                    ).toLocaleString('es-CO')}
                  </p>
                </div>

                
                <button
                  type="button"
                  className={estilos.botonAgregar}
                  
                >
                  Agregar
                </button>
              </article>
            );
          })}
      </div>
    </section>
    


    </>
  )
}
 export default Productcard