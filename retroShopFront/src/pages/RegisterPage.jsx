

import { useState } from 'react';

const RegisterPage = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
      });
      const [statusMessage, setStatusMessage] = useState("");

      const send = (e) => {
        e.preventDefault();
    
        fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(response => {
          if (response.ok) {
            console.log("Éxito");
            setStatusMessage("Registro exitoso , te hemos enviado un correo para verificar tu cuenta");
      
          } else {
            return response.json(); 
          }
        })
        .then(data => {
          if (data) {
            console.log(data);
            setStatusMessage(data.message);
          
          }
        })
        .catch(error => {
          console.error("Error al enviar los datos:", error);
          setStatusMessage("Error al enviar los datos");
        });
      };
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
      };


  return (
    <div className='flex justify-center items-center flex-col gap-2'>
     
    <h2>Registro</h2>
    <form className="flex justify-center items-center flex-col" onSubmit={send}>
      {/* <label htmlFor="name">Introduce nombre</label> */}
      <input
         placeholder="Nombre"
        type="text"
        id="name"
        value={userData.name}
        onChange={handleInputChange}
      />
      {/* <label htmlFor="email">Introduce email</label> */}
      <input
        type="email"
        placeholder="Email"
        id="email"
        value={userData.email}
        onChange={handleInputChange}
      />
      {/* <label htmlFor="password"> Contraseña</label> */}
      <input
        type="password"
        placeholder="Contraseña"
        id="password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Registrar</button>
    </form>
    {statusMessage && <p className="exitoso">{statusMessage}<span>&#160;</span></p>}  
   
  </div>
  )
}



export default RegisterPage