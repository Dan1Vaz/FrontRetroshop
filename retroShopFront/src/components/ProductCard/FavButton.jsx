import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import { useAddFavorites } from "../../Hook/Favorites/useAddFavorites";
import { authContext } from "../../providers/AuthProvider";

export const FavButton = ({ productId }) => {
  const [buttonColor, setButtonColor] = useState("#7C7C7C");
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [token] = useContext(authContext);
  const { addFavorite } = useAddFavorites(); // Obtener la función addFavorite del hook

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (!isAddedToFavorites) {
      try {
        await addFavorite(productId, token); // Llamar a la función addFavorite del hook
        setIsAddedToFavorites(true);
        const newButtonColor = "#FD2A5C";
        setButtonColor(newButtonColor);
      } catch (error) {
        console.error("Error al añadir a favoritos:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-[22px] h-[22px] rounded-full bg-[#D9D9D9] absolute left-[120px] top-[185px]">
      <button onClick={handleButtonClick} className="flex">
        <FavoriteIcon
          className={
            buttonColor === "#7C7C7C" ? "fill-[#7C7C7C]" : "fill-[#FD2A5C]"
          }
          sx={{ fontSize: 15 }}
        />
      </button>
    </div>
  );
};
