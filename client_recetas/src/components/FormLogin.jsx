import { useState } from "react";
import tokenApi from "../api/token.api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

export function FormLogin({ route, method }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setErrorMessage(null);

    try {
      const res = await tokenApi.post(route, { email, password });
      console.log(res);

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        console.log("Tokens guardados:", res.data.access, res.data.refresh);

        // Asegurarnos de que se navegue después de que los tokens estén guardados
        setTimeout(() => {
          navigate("/");
        }, 500); // Esperar un poco antes de redirigir (puedes ajustar el tiempo)
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Error en la autenticación. Por favor, inténtelo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg p-4 rounded">
            <h1 className="text-center mb-4" style={{ color: "#FC4B08" }}>
              {name}
            </h1>

            {errorMessage && (
              <p className="text-danger text-center mb-4">{errorMessage}</p>
            )}

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="form-control"
                style={{
                  borderColor: "#4CBD49",
                  borderWidth: "2px",
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="form-control"
                style={{
                  borderColor: "#4CBD49",
                  borderWidth: "2px",
                }}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="btn w-100"
                style={{
                  backgroundColor: "#FC4B08",
                  color: "#fff",
                  fontSize: "1.2em",
                  fontWeight: "bold"
                }}
              >
                {name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
