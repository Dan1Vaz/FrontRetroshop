import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export const Footer = () => {
  return (
    <footer className="flex justify-evenly  fixed bottom-0 w-full pb-[10px] pt-[10px] border-t-2 border-[7C7C7C] ">
      <div className="flex flex-col items-center">
        <HomeIcon fontSize="large" className="fill-[#7C7C7C]" />
        <p className="text-xs text-[#7C7C7C]">Inicio</p>
      </div>
      <div className="flex flex-col items-center">
        <AddCircleOutlineIcon fontSize="large" className="fill-[#7C7C7C]" />
        <p className="text-xs text-[#7C7C7C]">Subir</p>
      </div>
      <div className="flex flex-col items-center">
        <FavoriteIcon fontSize="large" className="fill-[#7C7C7C]" />
        <p className="text-xs text-[#7C7C7C]">Favoritos</p>
      </div>
      <div className="flex flex-col items-center">
        <PersonIcon fontSize="large" className="fill-[#7C7C7C]" />
        <p className="text-xs text-[#7C7C7C]">Tú</p>
      </div>
    </footer>
  );
};
