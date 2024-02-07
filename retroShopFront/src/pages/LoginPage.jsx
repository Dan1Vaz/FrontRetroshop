import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";
import PopUp from "../components/PopUp";

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
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setStatusMessage('');
  };


  const enviar = (e) => {
    e.preventDefault();

    fetch(`http://${import.meta.env.VITE_BASE_URL}:3001/login`, {
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
        setStatusMessage("Logueado");
        setShowPopup(true)
        autolink();
      })
      .catch((error) => {
        console.error("Error en inicio de sesión:", error.message);
        setStatusMessage("Nombre de usuario o contraseña incorrectos");
        setShowPopup(true)
        
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div
      className="flex justify-center items-center flex-col mt-20 gap-10">
        <img src="/retroshop.svg" alt="" className="h-[100px] p-4" />
      <form
        className="flex justify-center items-center flex-col gap-5"
        onSubmit={enviar}
      >
        {/* <label htmlFor="email">Introduce email</label> */}
        <input
          type="email"
          id="email"
          placeholder="Nombre"
          className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
          value={userData.email}
          onChange={handleInputChange}
        />
        {/* <label htmlFor="password">Contraseña</label> */}
        <input
          type="password"
          placeholder="Contraseña"
          className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
          id="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm "
        >
          Iniciar Sesión
        </button>
      </form>
      <div className="flex justify-start w-[278px] items-start mt-0">
      <NavLink className="mr-0 underline text-blue-600 hover:text-blue-800 visited:[#3337a3]" to="/profile/register">
        Crear Cuenta
      </NavLink>
    </div>

      {showPopup && <PopUp link={''} message={statusMessage} onClose={closePopup} />}
    </div>
  );
};

export default LoginPage;
