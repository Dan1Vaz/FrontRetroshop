import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const CurrentRoute = (route) => {
    // pa sacar la ruta a un estado de ruta actual
    return location.pathname === route;
  };
  // console.log(CurrentRoute);
  return (
    <footer className="flex justify-evenly  fixed bottom-0 w-full pb-[10px] pt-[10px] border-t-2 border-[#7C7C7C] bg-white z-[2] lg:hidden ">
      <div className="flex flex-col items-center text-center">
        <Link to="/">
          <HomeIcon
            fontSize="large"
            className={`fill-${CurrentRoute("/") ? "[#FE7193]" : "[#7C7C7C]"}`}
            // relleno con el color que corresponde a cada icono comparando la ruta actual con el estado de CurrentRoute
          />
          <p className="text-xs text-[#241717]">Inicio</p>
        </Link>
      </div>
      <button className="flex flex-col items-center text-center">
        <Link to="/profile">
          <AddCircleOutlineIcon
            fontSize="large"
            className={`fill-${
              CurrentRoute("/profile") ? "[#FE7193]" : "[#7C7C7C]"
            }`}
            // relleno con el color que corresponde a cada icono comparando la ruta actual con el estado de CurrentRoute
          />
          <p className="text-xs text-[#7C7C7C]">Subir</p>
        </Link>
      </button>
      <div className="flex flex-col items-center text-center">
        <FavoriteIcon
          fontSize="large"
          className={`fill-${
            CurrentRoute("/favorite") ? "[#FE7193]" : "[#7C7C7C]"
          }`}
          // relleno con el color que corresponde a cada icono comparando la ruta actual con el estado de CurrentRoute (OJO CON ESTA que aun le falta el Link con la ruta que es para colocar la ruta correcta aqui)
        />
        <p className="text-xs text-[#7C7C7C]">Favoritos</p>
      </div>
      <button className="flex flex-col items-center text-center">
        <Link to="/profile/menu">
          <PersonIcon
            fontSize="large"
            className={`fill-${
              CurrentRoute("/profile/menu") ? "[#FE7193]" : "[#7C7C7C]"
            }`}
            // relleno con el color que corresponde a cada icono comparando la ruta actual con el estado de CurrentRoute
          />
          <p className="text-xs text-[#7C7C7C]">Tú</p>
        </Link>
      </button>
    </footer>
  );
};
