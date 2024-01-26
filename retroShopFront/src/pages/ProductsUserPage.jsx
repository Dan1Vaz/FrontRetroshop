import { useContext } from 'react';
import useProductsByUser from '../Hook/useProductsByUser'
import { authContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import DeleteProductsPages from '../components/DeletedProducts';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import  baseURL from '../providers/ruta';
const ProductsUserPage = () => {
  const [token] = useContext(authContext);
  const { products, error, loading } = useProductsByUser(token);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
   
     <div className='flex flex-col'>
      
 
        <img src="/retroshop.svg" alt="" className="w-[300px] h-[100px]" />
     
  
    
      <h1 className='bg-white text-center my-[20px] text-pretty'>tus Productos </h1>
      <div className='contenedor'>
        {products.map((product) => (
          <div  className= "container_card "key={product.id}>
        
           <div className="image_cards">
              <img
                className="img image_cards_1"
                src={`${baseURL}/${product.imageURL}`}
                alt="cagada"/>
              <img
                className="img image_cards_2 "
                src={`${baseURL}/${product.imageURL2}`}
                alt="" />
            </div> 
            <h2 className='card_text'> {product.name}  </h2>
            <p className='card_text'>{product.category}</p>
            <div className='card_buttons'>
            <Link to={`/profile/modify/${product.id}`}>
              <button  className="card_button"><EditNoteOutlinedIcon/></button>
            </Link>
            {/* <Link to={`/profile/delete/${product.id}`}> */}
             <DeleteProductsPages card_button="card_button" productId ={product.id} />
            {/* </Link> */}
            </div>
            </div>
        ))}
      </div>
      </div>
  );
};

export default ProductsUserPage;
