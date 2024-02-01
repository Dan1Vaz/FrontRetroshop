import { useContext } from 'react';
import useProductsByUser from '../Hook/useProductsByUser'
import { authContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import DeleteProductsPages from '../components/DeleteProductsPages';

export const ProductsUserPage = () => {
  const [token] = useContext(authContext);
  const { products, error, loading } = useProductsByUser(token);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products User Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
           <h2> {product.name}  </h2>
            {/* aqui vemos componente miguel si es caja ngra */}
            <p>{product.category}</p>
            <div className='flex gap-2'>
            <Link to={`/profile/modify/${product.id}`}>
              <button  className="w-[150px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4 ">Modificar</button>
            </Link>
            {/* <Link to={`/profile/delete/${product.id}`}> */}
             <DeleteProductsPages productId ={product.id}/>
            {/* </Link> */}
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};
