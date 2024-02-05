import { useContext, useState } from 'react';
import useProductDelete from '../Hook/useProductDelete';
import { authContext } from '../providers/AuthProvider';

import PopUp from './PopUp';

const DeleteProductsPages = (props) => {
 const {productId} = props
  const { error, loading, deleteProduct } = useProductDelete();
  const [token] = useContext(authContext);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId, token);
      console.log("probando"+productId);
      setPopupOpen(true); // Abrir el popup después de eliminar el producto
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
   
      <button  className="w-[150px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4 " onClick={handleDeleteProduct}> Eliminar</button>

   
      {isPopupOpen && (
        <PopUp
          message="Producto eliminado exitosamente"
          onClose={handleClosePopup}
          link="/"
        />
      )}
    </div>
  );
};

export default DeleteProductsPages;
