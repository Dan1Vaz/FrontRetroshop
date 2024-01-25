import  { useContext, useState } from "react";
import usePutUser from "../Hook/usePutUser";
import { authContext } from "../providers/AuthProvider";


const PutUserPage = () => {
    const [token] = useContext(authContext);
    const { data, error, loading, putUser } = usePutUser();

    const [userData, setuserData] = useState({
      name: "",
     password: "",
     biography:"",
      avatar: "",
   
    });
  
    const handleUpdateProduct = async (e) => {
      e.preventDefault();
  //recojo cuerpo
      
      const updateBody = {
        name: userData.name,
        password: userData.password,
        biography: userData.biography,
        avatar: userData.avatar,
      
      };
  
      // Llama a la función putUser del hook
      await putUser( updateBody, token);
    };
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setuserData({ ...userData, [id]: value });
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setuserData({ ...userData, avatar: file });
    };
  
    
  
    return (
      <div>
        {/* Crear componente de loading */}
        {loading && <p>Loading... </p>}
        {error && <p>Error: {error.message}</p>}
        {data && <p>Data updated successfully</p>}
  
   
        <div className="flex items-center flex-col gap-[20px] h-1/2">
          <div className="flex">
            <img
              src="/retroshop.svg"
              alt=""
              className="w-[300px] h-[100px]"
            />
          </div>
          <h1>modificar perfil</h1>
          <form
            className="flex justify-center items-center flex-col gap-4"
            onSubmit={handleUpdateProduct}
          >
           
            <input
              type="text"
              id="name"
              className="w-[300px]  bg-white  p-[20px] border border-black"
              placeholder="nombre del articulo"
              value={userData.name}
              onChange={handleInputChange}
            />
       
            
        
              
        
              
           
                {/* <label htmlFor="description">Descripción</label> */}
                <textarea id="biography"
                 value={userData.biography} 
                 onChange={handleInputChange}
                     className="w-[300px] h-[33px] bg-white  p-[20px] border border-black"
                     placeholder='biography'>
                 </textarea>
            <input
              type="file"
              id="avatar"
              className="w-[400px] h-[50px] bg-white ml-[95px] pt-[20px] pr-0 pl-0"
              onChange={handleFileChange}
            />
                {/* <label htmlFor="price">Precio</label> */}
                <input
                 type="password" 
                id="password"
                className="w-[300px] bg-white  p-[20px] border border-black"
                placeholder='verifica tu password'
                 value={userData.password}
                  onChange={handleInputChange} />
           
            <button
              type="submit"
              className="w-[300px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  };

export default PutUserPage