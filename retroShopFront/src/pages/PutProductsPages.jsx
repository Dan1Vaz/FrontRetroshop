import  { useContext, useState } from "react";
import usePutProducts from "../Hook/usePutProducts";
import { authContext } from "../providers/AuthProvider";
import { useParams } from "react-router-dom";
import PopUp from '../components/PopUp';
const PutProductsPages = () => {
  const [token] = useContext(authContext);
  const { data, error, loading, putProduct } = usePutProducts();
  const { productId } = useParams();
  console.log(productId);
  const [showPopup, setShowPopup] = useState(false);
  const [link, setLink] = useState("");
  const closePopup = () => {
    setShowPopup(false);
    setStatusMessage(''); 
  };

  const [statusMessage, setStatusMessage] = useState("");
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    description: "",
    avatar: null,
    avatar2: null,
  });

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    // Agrega la lógica para construir el cuerpo del producto aquí
    const updateBody = {
      name: productData.name,
      category: productData.category,
      price: productData.price,
      location: productData.location,
      description: productData.description,
      avatar: productData.avatar,
      avatar2: productData.avatar2,
    };

    // Llama a la función putProduct del hook
    try {
      await putProduct(productId, updateBody, token);
   
      setStatusMessage("Producto actualizado correctamente");
      setLink("profile/products/user")
    } catch (error) {
     
      console.error("Error al actualizar el producto:", error);
      setStatusMessage("Error al actualizar el producto");
      setLink(`profile/modify/${productId}`)
    }
    setShowPopup(true); // Muestra el popup después de enviar el formulario
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
    <div>
      {/* Crear componente de loading */}
      {loading && <p>Loading... </p>}
      {error && <p>Error: {error}</p>}
      

 
      <div className="flex items-center flex-col gap-[20px] ">
        <div className="flex">
          <img
            src="/retroshop.svg"
            alt=""
            className="w-[300px] h-[100px]"
          />
        </div>
        <h1>modificar producto</h1>
        <form
          className="flex justify-center items-center flex-col gap-4"
          onSubmit={handleUpdateProduct}
        >
         
          <input
            type="text"
            id="name"
            className="input h-[550px]"
            placeholder="nombre del articulo"
            value={productData.name}
            onChange={handleInputChange}
          />
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
          <option value="televisor">Televisor</option>
          <option value="ordenador">Ordenador</option>
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
                   className="input"
                   placeholder='Descripción'>
               </textarea>
          <input
            type="file"
            id="avatar"
            className="w-[400px] h-[50px] bg-white ml-[95px] pt-[20px] pr-0 pl-0"
            onChange={handleFileChange}
          />
          <input
            type="file"
            id="avatar2"
            className="w-[400px] h-[50px] bg-white ml-[60px] p-[20px]"
            onChange={handleFileChange2}
          />
          <button
            type="submit"
            className="card_button"
          >
            Enviar
          </button>
        </form>
        {showPopup && <PopUp message={statusMessage} onClose={closePopup} link={link}/>}
      </div>
    </div>
  );
};

export default PutProductsPages;
