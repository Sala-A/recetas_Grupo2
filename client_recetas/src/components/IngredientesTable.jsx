import { IngredientesProvider } from "../components/IngredientesProvider";
import { deleteIngredientes } from "../api/Ingredientes.api";

export function IngredientesTable({ onEliminar }) {
  const eliminarIngrediente = async (ingrediente) => {
    const accepted = window.confirm("¿Deseas eliminar este ingrediente?");
    if (accepted) {
      try {
        await deleteIngredientes(ingrediente.id_ingredientes);
        onEliminar(ingrediente.id_ingredientes);
      } catch (error) {
        console.error("Error al eliminar el ingrediente:", error);
      }
    }
  };

  return (
    <IngredientesProvider>
      {(ingredientes) => (
        <>
          {ingredientes.length > 0 ? (
            <div className="my-3">
              <table className="table table-sm table-striped table-bordered table-hover w-100">
                <thead style={{ backgroundColor: "#FC4B08", color: "white" }}>
                  <tr>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Cantidad</th>
                    <th className="p-2">Unidad</th>
                    <th className="p-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredientes.map((ingrediente) => (
                    <tr key={ingrediente.id_ingredientes}>
                      <td className="border p-2">{ingrediente.nombre}</td>
                      <td className="border p-2">{ingrediente.cantidad}</td>
                      <td className="border p-2">{ingrediente.unidad}</td>
                      <td className="border p-2">
                        <button
                          style={{
                            backgroundColor: "#FC4B08",
                            color: "#fff",
                            fontSize: "0.875rem",
                            padding: "5px 10px",
                          }}
                          className="btn"
                          onClick={() => eliminarIngrediente(ingrediente)}
                        >
                          Eliminar ingrediente
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No hay ingredientes para esta receta.</p>
          )}
        </>
      )}
    </IngredientesProvider>
  );
}
