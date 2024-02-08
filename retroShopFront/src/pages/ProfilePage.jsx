import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LogOutButton } from "../components/LogOutButton";
import useGetUser from "../Hook/useGetUser";
import PersonIcon from "@mui/icons-material/Person";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import { AverageReview } from "../components/averageReview";

export const ProfilePage = () => {
  const [token] = useContext(authContext);
  const navigate = useNavigate();
  
  const { data, loading, error } = useGetUser();
  console.log([token]);
  if (!token) {
    return <Navigate to="/profile/login" />;
  }
  return (
    <div className="bg-slate-100 h-screen flex flex-col">
      <div className="flex items-center pt-10 bg-white border-b-[0.5px] border-[#db2777]">
        {data.avatarURL ? (
          <img
            src={`http://${import.meta.env.VITE_BASE_URL}:3001/${
              data.avatarURL
            }`}
            alt=""
            className="m-2 w-20 h-20 rounded-full object-cover border-[#7C7C7C] border-[0.5px]"
          />
        ) : (
          <PersonIcon className="m-2 w-20 h-20 rounded-full fill-slate-200 bg-slate-400" />
        )}
        <h1 className="text-2xl font-bold text-[#3337a3]">{data.name}</h1>
        {/* <p className="text-base text-[#3337a3]">{data.description}</p> */}
      </div>
      <p className="pl-4 pt-4 text-xl font-medium text-[#000000]">
        Transacciones
      </p>
      <div className="border-y-[0.5px] border-[#db2777] bg-white relative">
        <Link to='/profile/reservations'>
        <div className="flex items-center ml-3 mt-3 ">
          <HandshakeIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
          <article className="ml-4 text-[#000000]"> Reservas</article>
            <ArrowForwardIosIcon className="absolute right-9 top-[25px] fill-[#000000]" />
        </div>
        </Link>
        <Link to='/profile/seller'>
          <div className="flex items-center ml-3 mb-3  ">
            <StoreIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
            <article className="ml-4 text-[#000000]">Ventas</article>

            <ArrowForwardIosIcon className="absolute right-9 top-[75px] fill-[#000000]" />
          </div>
        </Link>
      </div>
      <p className="pl-4 pt-4 font-medium text-[#000000] text-xl">Cuenta</p>
      <div className="border-y-[0.5px] border-[#db2777] bg-white">
        <Link to="/profile/yourproducts">
          <div className="flex items-center ml-3 my-3 ">
            <InventoryIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
            <article className="ml-4 text-[#000000]">Tus Productos</article>

            <ArrowForwardIosIcon className="absolute right-9 top-[375px] fill-[#000000]" />
          </div>
        </Link>
        <Link to="/profile/perfil">
          <div className="flex items-center ml-3 my-3 ">
            <SettingsIcon sx={{ fontSize: 50 }} className="fill-[#000000]" />
            <article className="ml-4 text-[#000000]">Configuracion</article>

            <ArrowForwardIosIcon className="absolute right-9 top-[440px] fill-[#000000]" />
          </div>
        </Link>
      </div>
      <div className="flex justify-center pt-6">
        <LogOutButton />
      </div>
     
    </div>
  );
};
