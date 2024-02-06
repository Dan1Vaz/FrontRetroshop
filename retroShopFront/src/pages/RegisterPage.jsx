import { useState } from "react";
import PopUp from "../components/PopUp";

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
    <div className="flex justify-center items-center flex-col mt-20 gap-10">
      <img src="/retroshop.svg" alt="" className="h-[100px] p-4"/>
      <form
        className="flex justify-center items-center flex-col gap-5"
        onSubmit={send}
      >
        {/* <label htmlFor="name">Introduce nombre</label> */}
        <input
          placeholder="Nombre"
          className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
          type="text"
          id="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        {/* <label htmlFor="email">Introduce email</label> */}
        <input
          type="email"
          className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
          placeholder="Email"
          id="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        {/* <label htmlFor="password"> Contraseña</label> */}
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
          className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm"
        >
          Siguiente
        </button>
      </form>
      {showPopup && (
        <PopUp message={statusMessage} onClose={closePopup} link={link} />
      )}
    </div>
  );
};
