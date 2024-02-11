import { useState } from "react";
import PopUp from "../components/PopUp";
import { Link, NavLink } from "react-router-dom";

export const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [link, setLink] = useState("");
  const closePopup = () => {
    setShowPopup(false);
    setStatusMessage("");
  };
  const [statusMessage, setStatusMessage] = useState("");

  const send = (e) => {
    e.preventDefault();

    fetch(`http://${import.meta.env.VITE_BASE_URL}:3001/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Éxito");
          setStatusMessage(
            "Registro exitoso , Revisa tu bandeja de entrada para verificar tu cuenta con el correo electronico que te enviamos"
          );
          setShowPopup(true);
          setLink("/");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setStatusMessage(data.error);
          setShowPopup(true);
        }
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        setStatusMessage("Error al enviar los datos");
        setShowPopup(true);
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 md:flex-nowrap sm:h-screen sm:overflow-hidden   lg:flex-row  md:pb-[100px] lg:pb-0">
      <Link
        to={"/"}
        className=" hidden sm:flex  sm:h-full  sm:overflow-hidden lg:w-[70%] lg:h-full  
       "
      >
        <video
          autoPlay
          loop
          muted
          className=" hidden  sm:flex sm:w-full sm:h-full sm:object-fill sm:aspect-video lg:object-fill aspect-auto"
        >
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      </Link>
      <div className=" md:flex md:flex-col md:h-[100vh]  lg:w-[30%] md:mr-3% ">
        <img src="/retroshop.svg" alt="" className="h-[100px] p-4" />
        <form
          className="flex justify-center items-center flex-col gap-1"
          onSubmit={send}
        >
          <label
            htmlFor="name"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Nombre:
          </label>
          <input
            placeholder="Nombre"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            type="text"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <label
            htmlFor="email"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Correo:
          </label>
          <input
            type="email"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            placeholder="Email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <label
            htmlFor="password"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Contraseña:
          </label>
          <input
            type="password"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            placeholder="Contraseña"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm mt-2"
          >
            Siguiente
          </button>
          <div className="flex justify-start w-[278px] items-start mt-0">
            <NavLink
              className="mr-0 underline text-blue-600 hover:text-blue-800 visited:[#3337a3]"
              to="/profile/login"
            >
              Login
            </NavLink>
          </div>
        </form>
      </div>
      {showPopup && (
        <PopUp message={statusMessage} onClose={closePopup} link={link} />
      )}
    </div>
  );
};
