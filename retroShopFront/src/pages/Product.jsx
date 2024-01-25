import { useState, useEffect } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import EuroIcon from '@mui/icons-material/Euro';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import useProducts from '../../Hook/useProducts'


const Product = () => {
  const { products } = useProducts();
  const { id } = useParams();
  console.log(id);
  const [selectedProduct,setSelectProduct] = useState({})
  const [selectImage, setSelectImage] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
console.log(products);
 
  console.log(selectedProduct);
  console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  useEffect(() => {
    // Actualizar el estado cuando los productos estén cargados
    if (products.length > 0) {
     const pa =products.find(product => product.id === id);
      if (pa) {
        setSelectProduct(pa);
      }
    }
  }, [products, id]);
  if (!selectedProduct) {
  
    return <div>No se encontró el producto</div>;
  }

  const handleImage0 = () => {
    setSelectImage(selectedProduct.imageURL);
  };

  const handleImage1 = () => {
    setSelectImage(selectedProduct.imageURL2);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='
    flex flex-col'>
      <div className="flex flex-row w-[40%]">
        <div className="productImage">
          <img className="w-[50px] h-[50px]" src={`http://localhost:3001/${selectedProduct.imageURL}`} alt="" onClick={handleImage0} />
          <img className="w-[50px] h-[50px]" src={`http://localhost:3001/${selectedProduct.imageURL2}`} alt="" onClick={handleImage1} />
        </div>
        <div className="mainproductImage">
          <img className="w-[300px] h-[100px]" src={`http://localhost:3001/${selectImage}`} alt="" />
        </div>
      </div>

      <div className="flex flex-row w-[40%]">
        <h2 className="producth2">{selectedProduct.name} </h2>
        <p className="product_parrafo product_price">{selectedProduct.price}<EuroIcon/></p>
        <p className="product_parrafo">{selectedProduct.description}</p>

       

        <p className="product_parrafo favorite" onClick={handleFavoriteToggle}>
          {isFavorite ? <FavoriteBorderOutlinedIcon/> : <FavoriteOutlinedIcon/>}
        </p>
        
      </div>
    </div>
  );
};




export default Product;
