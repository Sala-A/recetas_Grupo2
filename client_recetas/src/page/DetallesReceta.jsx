import { ListIngredients } from "../components/ListIngredients";
import { ListPasos } from "../components/ListPasos";

export function DetallesReceta() {
  return (
    <div className="container">
        <h1 className="mb-4 text-center" style={{ color: "#FC4B08"}}>
            Lista de Ingredientes
        </h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
          <ListIngredients />
        </div>
        
        <div>
          <ListPasos />
        </div>
      </div>

    </div>
  );
}
