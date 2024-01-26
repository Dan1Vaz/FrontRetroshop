

import { useState } from 'react';
import PopUp from '../components/PopUp';
import  baseURL from '../providers/ruta';
const RegisterPage = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
      });
      const [showPopup, setShowPopup] = useState(false);
      const [link, setLink] = useState("");
      const closePopup = () => {
        setShowPopup(false);
        setStatusMessage(''); 
      };
      const [statusMessage, setStatusMessage] = useState("");
    
      const send = (e) => {
        e.preventDefault();
    
        fetch(`${baseURL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(response => {
          if (response.ok) {
            console.log("Éxito");
            setStatusMessage("Registro exitoso , Revisa tu bandeja de entrada para verificar tu cuenta con el correo electronico que te enviamos");
           setShowPopup(true)
           setLink("/")
          } else {
            return response.json(); 
          }
        })
        .then(data => {
          if (data) {
            console.log(data);
            setStatusMessage(data.message);
            setShowPopup(true)
          
          }
        })
        .catch(error => {
          console.error("Error al enviar los datos:", error);
          setStatusMessage("Error al enviar los datos");
          setShowPopup(true)
        });
      };
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
      };


  return (
    <div
      className="flex justify-center items-center flex-col gap-[20px] h-screen">
      <div className="flex ">
        <img src="/retroshop.svg" alt="" className="w-[300px] h-[100px]" />
     
  
      </div>
    <form className="flex justify-center items-center flex-col gap-5 mt-" onSubmit={send}>
      {/* <label htmlFor="name">Introduce nombre</label> */}
      <input
         placeholder="Nombre"
         className="w-[278px] h-[33px] bg-white  p-[20px] border border-black"
        type="text"
        id="name"
        value={userData.name}
        onChange={handleInputChange}
      />
      {/* <label htmlFor="email">Introduce email</label> */}
      <input
        type="email"
        className="w-[278px] h-[33px] bg-white  p-[20px] border border-black"
        placeholder="Email"
        id="email"
        value={userData.email}
        onChange={handleInputChange}
      />
      {/* <label htmlFor="password"> Contraseña</label> */}
      <input
        type="password"
        className="w-[278px] h-[33px] bg-white  p-[20px] border border-black"
        placeholder="Contraseña"
        id="password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <button type="submit"  className="w-[278px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4 ">SIGUIENTE</button>
    </form>
    {showPopup && <PopUp message={statusMessage} onClose={closePopup} link={link}/>}
   
  </div>
  )
}



export default RegisterPage