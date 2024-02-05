import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export const FavButtonDetailedProduct = () => {
  const [buttonColor, setButtonColor] = useState("#7C7C7C");

  const handleButtonClick = () => {
    const newButtonColor = buttonColor === "#7C7C7C" ? "#FD2A5C" : "#7C7C7C";
    setButtonColor(newButtonColor);
  };

  return (
    <div className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#D9D9D9] absolute right-4 top-5">
      <button onClick={handleButtonClick} className="flex">
        <FavoriteIcon
          className={`fill-[${buttonColor}]`}
          sx={{ fontSize: 25 }}
        />
      </button>
    </div>
  );
};
