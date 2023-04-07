import "../css/Component.css";
function Informacion() {
  return (
    <div className="contenedor__informacion">
      <article className="article" title="parrafo principal">
        <h1 className="titulo">Create React App</h1>
        <p className="parrafo">
          Create React App es un ambiente cómodo para aprender React, y es la
          mejor manera de comenzar a construir una nueva aplicación de página
          única usando React. Create React App configura tu ambiente de
          desarrollo de forma que puedas usar las últimas características de
          Javascript, brindando una buena experiencia de desarrollo, y
          optimizando tu aplicación para producción. Necesitarás tener Node =
          14.0.0 y npm = 5.6 instalados en tu máquina. Para crear un proyecto
          ejecuta:
        </p>
      </article>
    </div>
  );
}
export default Informacion;
