import { useParams } from "react-router-dom";
import { ListIngredients } from "../components/ListIngredients";
import { ListPasos } from "../components/ListPasos";

export function DetallesReceta() {

  const { id_receta } = useParams();

  return (
    <div className="container">
        <h1 className="mb-4 text-center" style={{ color: "#FC4B08"}}>
            Detalles De La Receta
        </h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
          <ListIngredients id_receta={id_receta} />
        </div>
        
        <div>
          <ListPasos id_receta={id_receta}/>
        </div>
      </div>

    </div>
  );
}
