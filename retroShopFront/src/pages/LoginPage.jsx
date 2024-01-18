import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

const LoginPage = () => {
  const [, setToken] = useContext(authContext);

  const navigate = useNavigate();

  function autolink() {
    navigate("/");
  }

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const enviar = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to login");
        }
      })
      .then((data) => {
        const token = data.token;

        setToken(token);
        console.log("Token recibido:", token);
        setStatusMessage("ok");
        autolink();
      })
      .catch((error) => {
        console.error("Error en inicio de sesión:", error.message);
        setStatusMessage("error");
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div
      className="flex justify-center items-center flex-col gap-2">
      <div className="">
        <img src="/iconretroshop.svg" alt="" className="w-[px] h-[53px]" />
      </div>
      <form
        className="flex justify-center items-center flex-col gap-5"
        onSubmit={enviar}
      >
        {/* <label htmlFor="email">Introduce email</label> */}
        <input
          type="email"
          id="email"
          placeholder="Nombre"
          className="w-[278px] h-[33px] bg-[#efefef]  p-[20px] "
          value={userData.email}
          onChange={handleInputChange}
        />
        {/* <label htmlFor="password">Contraseña</label> */}
        <input
          type="password"
          placeholder="Contraseña"
          className="w-[278px] h-[33px] bg-[#efefef]  p-[20px] "
          id="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-[278px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4 "
        >
          Iniciar Sesión
        </button>
      </form>
      <NavLink to="/register">Crear Cuenta</NavLink>

      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default LoginPage;
