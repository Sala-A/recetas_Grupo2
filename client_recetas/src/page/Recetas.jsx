import { ListReceta } from "../components/ListReceta";

export function Recetas() {
  return (
    <div className="container">
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-lg-3"
        style={{ gap: "1rem" }}
      >
        <ListReceta />
      </div>
    </div>
  );
}
