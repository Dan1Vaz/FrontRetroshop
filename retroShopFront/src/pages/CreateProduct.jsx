import  { useState, useContext } from 'react';
import  baseURL from '../providers/ruta';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider'

const CreateProduct = () => {

    const navigate = useNavigate();
    const [token,] = useContext(authContext);


    const [productData, setProductData] = useState({
        name: '',
        category: '',
        price: '',
        location: '',
        description: '',
        
      });
    
      const [statusMessage, setStatusMessage] = useState('');
 
     
 
    
      const enviar = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
       if(productData.name) formData.append('name', productData.name);
       if(productData.category) formData.append('category', productData.category);
       if(productData.price)formData.append('price', productData.price);
       if(productData.location)formData.append('location', productData.location);
       if(productData.description) formData.append('description', productData.description);
       if(productData.avatar) formData.append('avatar', productData.avatar);
       if(productData.avatar2)formData.append('avatar2', productData.avatar2);
    
    
        try {
          const response = await fetch(`${baseURL}/products/create`, {
            method: 'POST',
            headers: {
              Authorization:  `Bearer ${token}`
            },
            body: formData,
          });
       console.log(formData);
          if (response.ok) {
            setStatusMessage('Registro exitoso');
            navigate('/profile/products/user');
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
        
      <div   className="flex justify-center items-center flex-col gap-[20px] ">
      <div className="flex ">
        <img src="/retroshop.svg" alt="" className="w-[300px] h-[100px]" />
  
      </div>
          <h1 className='blue-gradient_text head-text flex justify-center ' >Registro de Producto</h1>
         
          <form className="flex justify-center items-center flex-col gap-4" onSubmit={enviar} >
           
            <input type="text"
             id="name" 
             className="input"
             placeholder='nombre del articulo'
             value={productData.name}
             onChange={handleInputChange} />
    
            {/* <label htmlFor="category">Categoría</label> */}
            <select
          id="category"
          className="input_category"
          value={productData.category}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Selecciona una categoría
          </option>
          <option value="consola">Consola</option>
          <option value="movil">Móvil</option>
          <option value="videojuegos">Juegos</option>
          <option value="radio">Televisor</option>
          <option value="ordenador">Ordenador</option>
          <option value="otros">otros</option>
        </select>
    
            {/* <label htmlFor="price">Precio</label> */}
            <input
             type="text" 
            id="price"
            className="input"
            placeholder='price'
             value={productData.price}
              onChange={handleInputChange} />
    
            {/* <label htmlFor="location">Ubicación</label> */}
            <input type="text"
             id="location"
             className="input"
             placeholder='Localidad'
              value={productData.location}
               onChange={handleInputChange} />
    
          
       
            {/* <label htmlFor="description">Descripción</label> */}
            <textarea id="description"
             value={productData.description} 
             onChange={handleInputChange}
                 className="textarea"
                 placeholder='Descripción'>
             </textarea>
        {/* <label htmlFor="avatar">Imagen 2</label> */}
        {/* style={{ width: "300px" }} del inputu  */}

       <input  type="file"
        id="avatar"
      className="w-[400px] h-[50px] bg-white ml-[95px] pt-[20px] pr-0 pl-0 "
      
         onChange={handleFileChange} />
        {/* <label htmlFor="avatar2">imagen 2</label> */}
       <input 
        type="file" 
        className="w-[400px] h-[50px] bg-white ml-[60px] p-[20px] "
        id="avatar2"
         onChange={handleFileChange2} />
     
     <button type="submit"  className="card_button  ">enviar</button>
          
          </form>
        

        </div>
      );
    };
    export default CreateProduct;