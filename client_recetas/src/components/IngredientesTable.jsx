import { useParams } from "react-router-dom";
import { IngredientesProvider } from "../components/IngredientesProvider";
import { deleteIngredientes, updateIngrediente } from "../api/Ingredientes.api";

export function IngredientesTable({ onEditar, onEliminar }) {
  const { id_receta } = useParams(); // Extraemos `id_receta` de la URL

  const editarIngrediente = async (ingrediente) => {
    console.log("id_ingredientes", ingrediente.id_ingredientes);

    // Llamamos a onEditar para manejar la edición en el componente superior
    onEditar(ingrediente);

    // Preparamos los datos que vamos a enviar para la actualización del ingrediente
    const ingredienteData = {
      nombre: ingrediente.nombre,
      cantidad: ingrediente.cantidad,
      unidad: ingrediente.unidad,
    };

    try {
      // Actualizamos el ingrediente, ahora pasamos tanto el id_receta como el id_ingredientes
      await updateIngrediente(id_receta, ingrediente.id_ingredientes, ingredienteData);
      console.log("Ingrediente actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar el ingrediente:", error);
    }
  };

  const eliminarIngrediente = async (ingrediente) => {
    const accepted = window.confirm("¿Deseas eliminar este ingrediente?");
    if (accepted) {
      try {
        // Eliminamos el ingrediente usando su `id_ingredientes`
        await deleteIngredientes(ingrediente.id_ingredientes);
        onEliminar(ingrediente.id_ingredientes); // Llamamos a onEliminar para actualizar la lista
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
                        {/* Botón de editar */}
                        <button
                          className="btn mx-2"
                          style={{
                            background: "#4CBD49",
                            color: "#fff",
                            fontSize: "0.875rem",
                            padding: "5px 10px",
                          }}
                          onClick={() => editarIngrediente(ingrediente)}
                        >
                          Editar ingrediente
                        </button>

                        {/* Botón de eliminar */}
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
