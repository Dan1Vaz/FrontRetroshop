import { useContext, useState } from "react";
import useProductDelete from "../Hook/useProductDelete";
import { authContext } from "../providers/AuthProvider";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PopUp from "./PopUp";

const DeletedProducts = (props) => {
  const { productId } = props;
  //const { data, error } = useProductDelete();
  const [token] = useContext(authContext);
  const [statusMessage, setStatusMessage] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  //console.log(error);
  //console.log(deleteProduct);

  //console.log(error.message.data);
  //console.log(error.response.data);

  const handleDeleteProduct = async () => {
    fetch(
      `http://${import.meta.env.VITE_BASE_URL}:3001/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Producto eliminado correctameente");
          setStatusMessage("Producto eliminado correctamente");
          setShowPopup(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setStatusMessage(data.error);
          setShowPopup(true);
        }
      });
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button onClick={handleDeleteProduct}>
        {" "}
        <DeleteOutlineOutlinedIcon />
      </button>

      {showPopup && (
        <PopUp message={statusMessage} onClose={handleClosePopup} link="" />
      )}
    </>
  );
};

export default DeletedProducts;

// try {
//   await deleteProduct(productId, token);
//   console.log("probando" + productId);
//   setShowPopup(true);
//   setStatusMessage("Producto eliminado exitosamente");
// } catch (error) {
//   setShowPopup(true);
//   if (error.response) {
//     setStatusMessage(error.response.data.message);
//     console.log("Error si hay response", statusMessage);
//   } else if (error.message) {
//     setStatusMessage(error.message);
//     console.log("Error si hay message", statusMessage);
//   } else {
//     setStatusMessage("Error desconocido al eliminar el producto");
//   }
//   console.error("Error deleting product:", error);
// }
