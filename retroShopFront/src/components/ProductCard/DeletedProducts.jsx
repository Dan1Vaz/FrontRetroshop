import { useContext, useState } from 'react';
import useProductDelete from '../Hook/useProductDelete';
import { authContext } from '../providers/AuthProvider';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PopUp from './PopUp';

const DeletedProducts = (props) => {
 const {productId,card_button} = props
  const { deleteProduct } = useProductDelete();
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
    <>
   
      <button className={card_button} onClick={handleDeleteProduct}> <DeleteOutlineOutlinedIcon/></button>

   
      {isPopupOpen && (
        <PopUp
          message="Producto eliminado exitosamente"
          onClose={handleClosePopup}
          link="profile/products/user"
        />
      )}
    </>
  );
};

export default DeletedProducts;
