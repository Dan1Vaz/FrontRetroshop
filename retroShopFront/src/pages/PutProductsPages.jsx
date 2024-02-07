import  { useContext, useState } from "react";
import usePutProducts from "../Hook/usePutProducts";
import { authContext } from "../providers/AuthProvider";
import { Link, useParams } from "react-router-dom";

export const PutProductsPages = () => {
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

 
      <div className="flex justify-center items-center flex-col mt-3 mb-[100px]">
          <img
            src="/retroshop.svg"
            alt=""
            className="w-[400px] h-[100px]"
          />
        <h1 className="text-2xl font-bold text-[#3337a3] mb-5">Modificar Producto</h1>
        <form
          className="flex justify-center items-center flex-col gap-5 text-[#3337a3]"
          onSubmit={handleUpdateProduct}
        >
         
          <input
            type="text"
            id="name"
            className="w-[278px] h-[33px]  bg-white  p-[20px] border border-[#db2777] rounded-md"
            placeholder="nombre del articulo"
            value={productData.name}
            onChange={handleInputChange}
          />
         <select
          id="category"
          className="w-[278px] bg-white p-[20px] border border-[#db2777] rounded-md"
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
              className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
              placeholder='price'
               value={productData.price}
                onChange={handleInputChange} />
      
              {/* <label htmlFor="location">Ubicación</label> */}
              <input type="text"
               id="location"
               className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
               placeholder='Localidad'
                value={productData.location}
                 onChange={handleInputChange} />
      
            
         
              {/* <label htmlFor="description">Descripción</label> */}
              <textarea id="description"
               value={productData.description} 
               onChange={handleInputChange}
               className="w-[278px] h-[73px] bg-white p-[20px] border border-[#db2777] rounded-md"
                   placeholder='Descripción'>
               </textarea>
          <input
            type="file"
            id="avatar"
            className="text-[#3337a3] text-transparent pl-24 max-w-[350px]"
            onChange={handleFileChange}
          />
          <input
            type="file"
            id="avatar2"
            className="text-[#3337a3] text-transparent pl-24 max-w-[350px]"
            onChange={handleFileChange2}
          />
          <Link to="/profile/yourproducts">
          <button
            type="submit"
            className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm"
          >
            Enviar
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
