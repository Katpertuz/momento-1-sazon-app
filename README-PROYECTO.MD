# 🍳 Proyecto Sazón - Ecosistema React

Bienvenido al repositorio oficial del proyecto **Sazón**. Este proyecto tiene como objetivo desarrollar una plataforma web interactiva y modular, trasladando nuestro diseño estático a un ecosistema basado en React.

## 🎯 Objetivo del "Momento 1"
El objetivo principal de esta fase inicial es inicializar el proyecto, establecer la arquitectura base dividiendo la interfaz en **componentes lógicos reutilizables** y manejar datos estáticos a través de estados locales, asegurando la implementación de nuestro kit de marca.

## 👥 Equipo de Desarrollo
* Katherin Ortega


## 🛠️ Tecnologías y Herramientas
* **Core:** React 18
* **Bundler:** Vite
* **Estilos:** CSS Components (Implementación estricta del Kit de Marca Sazón / Nutresa)
* **Control de Versiones:** Git & GitHub

## 📂 Arquitectura del Proyecto
El proyecto sigue una estructura modular orientada a la escalabilidad. Dentro del directorio `src/`, encontrarás:

```text
src/
 ├── assets/      # Recursos estáticos (Logos de Sazón/Nutresa, imágenes, fuentes)
 ├── components/  # Componentes reutilizables de la interfaz (Navbar, Footer, ProductCard, etc.)
 ├── views/       # Vistas principales o páginas completas que agrupan componentes
 ├── styles/      # Archivos CSS base y variables del kit de marca
 ├── App.jsx      # Componente raíz donde se orquesta la aplicación
 └── main.jsx     # Punto de entrada de React
```

## 🎨 Kit de Marca (CSS)
La aplicación respeta el ecosistema visual de Sazón. Todo el manejo de colores corporativos, tipografías y espaciados se gestiona a través de CSS Components, garantizando consistencia en todas las vistas y componentes.

## 🌳 Flujo de Trabajo (Gitflow)
Para mantener un historial limpio y un trabajo colaborativo eficiente, el equipo utiliza el siguiente esquema de ramas:

1. `main`: Rama de producción. Contiene código estable y aprobado.
2. `dev`: Rama de integración. Aquí se unen las diferentes funcionalidades antes de pasar a producción.
3. `feature/<nombre-funcionalidad>`: Ramas de trabajo individual o por tarea (ej. `feature/setup-inicial`, `feature/navbar-component`).

**Reglas de Commits:**
Los commits deben ser limpios, descriptivos y preferiblemente seguir la convención de Conventional Commits (ej. `feat:`, `fix:`, `chore:`).

## 🚀 Instalación y Ejecución Local

Si eres un desarrollador y deseas levantar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Moverse a la carpeta del proyecto:**
   ```bash
   cd sazon-app
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

El proyecto estará disponible por defecto en `http://localhost:5173/`.