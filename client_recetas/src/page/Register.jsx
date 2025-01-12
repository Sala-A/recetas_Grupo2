import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.passwordConfirmation) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Enviar los datos al backend para registrar al usuario
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        // Ruta del backend para registro
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuario registrado:", data);

        // Redirigir al login después del registro
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Hubo un error al registrar el usuario");
      }
    } catch (err) {
      console.error("Error al enviar el registro:", err);
      setError("Hubo un error al procesar tu solicitud");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg p-4 rounded">
            <h1 className="text-center mb-4" style={{ color: "#FC4B08" }}>
              Register
            </h1>
            <div>
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="passwordConfirmation">Confirmar contraseña</label>
              <input
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#FC4B08",
                color: "#fff",
                fontSize: "1.2em",
                fontWeight: "bold",
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
