import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-xl" style={{ marginBottom: "2rem" }}>
      <div className="container-fluid">
        <div
          className="d-grid grid-template-columns-2 "
          style={{ marginLeft: "200px" }}
        >
          <Link
            className="navbar-brand"
            style={{
              position: "relative",
              right: "100px",
              fontSize: "4em",
              fontWeight: "bold",
              color: "#FC4B08",
              userSelect: "none",
            }}
            to="/"
          >
            SazónApp
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-4 fs-7">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recetasList">
                Recetas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Recetas-add">
                Crear recetas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
