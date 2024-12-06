import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Register");
  };
  return (
    <>
      <div className="container my-4 d-flex flex-column align-items-center">
        <div className="row align-items-center justify-content-center text-center text-md-start">
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
            <div
              className="image-container"
              style={{
                backgroundColor: "#4CBD49",
                width: "206px",
                height: "220px",
                display: "inline-block",
              }}
            >
              <img
                src="./src/assets/plato.png"
                alt="Plato-home"
                width={250}
                style={{ position: "relative", right: "25px", bottom: "10px" }}
              />
            </div>
          </div>

          <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-start">
            <h1 className="my-3" style={{ fontSize: "2.5rem" }}>
              Bienvenidos
            </h1>
            <p className="mb-4" style={{ fontSize: "1rem", color: "#474747" }}>
              Descubre y comparte deliciosas recetas de cocina. ¡Únete a nuestra
              comunidad de amantes de la cocina y encuentra inspiración para tus
              próximas comidas!
            </p>
            <p>
              Ya sea que seas un chef experimentado o un aficionado de la
              cocina, aquí encontrarás recetas para todos los gustos, desde
              platos rápidos hasta comidas gourmet.
            </p>
            <button
              onClick={handleClick}
              className="btn"
              style={{
                backgroundColor: "#FC4B08",
                color: "#fff",
                padding: "10px",
                fontSize: "1.2em",
                fontWeight: "bold",
              }}
            >
              Regístrate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
