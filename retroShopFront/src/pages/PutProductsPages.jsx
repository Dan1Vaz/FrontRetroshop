import  { useContext, useState } from "react";
import usePutProducts from "../Hook/usePutProducts";
import { authContext } from "../providers/AuthProvider";
import { useParams } from "react-router-dom";

const PutProductsPages = () => {
  const [token] = useContext(authContext);
  const { data, error, loading, putProduct } = usePutProducts();
  const { productId } = useParams();
  console.log(productId);
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
    await putProduct(productId, updateBody, token);
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
        <h1>Registro de Producto</h1>
        <form
          className="flex justify-center items-center flex-col gap-4"
          onSubmit={handleUpdateProduct}
        >
         
          <input
            type="text"
            id="name"
            className="w-[300px]  bg-white  p-[20px] border border-black"
            placeholder="nombre del articulo"
            value={productData.name}
            onChange={handleInputChange}
          />
         <select
          id="category"
          className="w-[300px] bg-white p-[20px] border border-black"
          value={productData.category}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Selecciona una categoría
          </option>
          <option value="consola">Consola</option>
          <option value="movil">Móvil</option>
          <option value="juegos">Juegos</option>
          <option value="televisor">Televisor</option>
          <option value="ordenador">Ordenador</option>
        </select>
              {/* <label htmlFor="price">Precio</label> */}
              <input
               type="text" 
              id="price"
              className="w-[300px] bg-white  p-[20px] border border-black"
              placeholder='price'
               value={productData.price}
                onChange={handleInputChange} />
      
              {/* <label htmlFor="location">Ubicación</label> */}
              <input type="text"
               id="location"
               className="w-[300px] h-[33px] bg-white  p-[20px] border border-black"
               placeholder='Localidad'
                value={productData.location}
                 onChange={handleInputChange} />
      
            
         
              {/* <label htmlFor="description">Descripción</label> */}
              <textarea id="description"
               value={productData.description} 
               onChange={handleInputChange}
                   className="w-[300px] h-[33px] bg-white  p-[20px] border border-black"
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
            className="w-[300px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PutProductsPages;
