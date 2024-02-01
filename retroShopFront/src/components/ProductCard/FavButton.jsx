import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export const FavButton = () => {
  const [buttonColor, setButtonColor] = useState("#7C7C7C");

  const handleButtonClick = () => {
    const newButtonColor = buttonColor === "#7C7C7C" ? "#FD2A5C" : "#7C7C7C";
    setButtonColor(newButtonColor);
  };

  return (
    <div className="flex justify-center items-center w-[22px] h-[22px] rounded-full bg-[#D9D9D9] absolute left-[120px] top-[185px]">
      <button onClick={handleButtonClick} className="flex">
        <FavoriteIcon
          className={`fill-[${buttonColor}]`}
          sx={{ fontSize: 15 }}
        />
      </button>
    </div>
  );
};
