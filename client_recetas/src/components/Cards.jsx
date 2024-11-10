export default function Cards({ receta }) {
  return (
    <div className="container">
      <div
        className="recetas-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <div className="card" style={{border:'solid 1px #4CBD49',boxShadow: "0 2px 4px 0 rgba(76, 189, 73, 0.5)", width:'26rem'}}>
          <img
            src={receta.imagen}
            className="card-img-top"
            alt={receta.nombre}
            style={{
              objectFit: "cover",
              height: "200px",
              width: "100%",
            }}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#8C8C8C", fontWeight: "bold" }}
            >
              {receta.nombre}
            </h5>
            <p className="card-text">{receta.descripcion}</p>
            <p className="card-text">
              <img
                src="./src/assets/reloj.png"
                alt="Tiempo de preparación"
                style={{ width: "20px", marginRight: "5px" }}
              />
              {receta.tiempo_preparacion} minutos
            </p>
            <p className="card-text">
              <img
                src="./src/assets/feliz.png"
                alt="Número de comensales"
                style={{ width: "20px", marginRight: "5px" }}
              />
              {receta.numero_comensales} comensales
            </p>
            <a
              href="#"
              className="btn mt-2 w-100"
              style={{
                backgroundColor: "#FC4B08",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Ver receta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
