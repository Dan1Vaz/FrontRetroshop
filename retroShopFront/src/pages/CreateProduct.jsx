import  { useState, useContext } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider'

const CreateProduct = () => {

    const navigate = useNavigate();
    const [token,] = useContext(authContext);

    if (!token) {
      return <Navigate to="/profile/login" />;
    }

    const [productData, setProductData] = useState({
        name: '',
        category: '',
        price: '',
        location: '',
        description: '',
        
      });
    
      const [statusMessage, setStatusMessage] = useState('');
    
      const autolink = () => {
        navigate('/profile/products/user');
      };
    
      const enviar = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('category', productData.category);
        formData.append('price', productData.price);
        formData.append('location', productData.location);
        formData.append('description', productData.description);
        formData.append('avatar', productData.avatar);
        formData.append('avatar2', productData.avatar2);
    
    
        try {
          const response = await fetch(`http://${import.meta.env.VITE_BASE_URL}:3001/products/create`, {
            method: 'POST',
            headers: {
              Authorization:  `Bearer ${token}`
            },
            body: formData,
          });
       console.log(formData);
          if (response.ok) {
            setStatusMessage('Registro exitoso');
            autolink();
          } else {
            const data = await response.json();
            if (data) {
              setStatusMessage(data.message);
            }
          }
        } catch (error) {
          setStatusMessage('Error al enviar los datos');
        }
      };
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setProductData({ ...productData, [id]: value });
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProductData({ ...productData, avatar: file });
      };
      const handleFileChange2 = (e) => {
        const file2 = e.target.files[0];
        setProductData({ ...productData, avatar2: file2 });
      };
    
      return (
        <div className="flex  items-center flex-col gap-[20px] h-screen">
      <div className="flex ">
        <img src="/retroshop.svg" alt="" className="  h-[100px]" />
     
  
      </div>
          <h1 className='font-bold text-[#1e3a8a]'>Registro de Producto</h1>
         
          <form className="flex justify-center items-center flex-col gap-4 text-[#1e3a8a]" onSubmit={enviar} >
           
            <input type="text"
             id="name" 
             className="w-[300px]  bg-white  p-[20px] border border-[#db2777] rounded-md"
             placeholder='nombre del articulo'
             value={productData.name}
             onChange={handleInputChange} />
    
            {/* <label htmlFor="category">Categoría</label> */}
            <select
          id="category"
          className="w-[300px] bg-white p-[20px] border border-[#db2777] rounded-md"
          value={productData.category}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Selecciona una categoría
          </option>
          <option value="consola">Consola</option>
          <option value="movil">Móvil</option>
          <option value="videojuegos">Videojuegos</option>
          <option value="televisor">Televisor</option>
          <option value="ordenador">Ordenador</option>
        </select>
    
            {/* <label htmlFor="price">Precio</label> */}
            <input
             type="text" 
            id="price"
            className="w-[300px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            placeholder='precio'
             value={productData.price}
              onChange={handleInputChange} />
    
            {/* <label htmlFor="location">Ubicación</label> */}
            <input type="text"
             id="location"
             className="w-[300px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
             placeholder='Localidad'
              value={productData.location}
               onChange={handleInputChange} />
    
          
       
            {/* <label htmlFor="description">Descripción</label> */}
            <textarea id="descripción"
             value={productData.description} 
             onChange={handleInputChange}
                 className="w-[300px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
                 placeholder='Descripción'>
             </textarea>
        {/* <label htmlFor="avatar">Imagen 2</label> */}
        {/* style={{ width: "300px" }} del inputu  */}

       <input  type="file"
        id="avatar"
      className="w-[400px] h-[50px] bg-white ml-[95px] pt-[20px] pr-0 pl-0"
      
         onChange={handleFileChange} />
        {/* <label htmlFor="avatar2">imagen 2</label> */}
       <input 
        type="file" 
        className="w-[400px] h-[50px] bg-white ml-[60px] p-[20px]"
        id="avatar2"
         onChange={handleFileChange2} />
     
     <button type="submit"  className="w-[300px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4 ">enviar</button>
          
          </form>
        

        </div>
      );
    };

export default CreateProduct