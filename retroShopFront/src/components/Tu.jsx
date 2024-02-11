import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import useGetUser from "../Hook/useGetUser";
import PersonIcon from "@mui/icons-material/Person";

export const Tu = () => {
    const [token] = useContext(authContext);
    const { data, loading, error } = useGetUser();
    
  return (
    <Link to="/profile/menu">
    <div className="hidden lg:flex absolute top-2 right-20">
      {data.avatarURL ? (
        <>
           <p className="absolute top-16 right-25 text-[0.6rem]">{data.name}</p>
          <img
            src={`http://${import.meta.env.VITE_BASE_URL}:3001/${data.avatarURL}`}
            alt="Foto de perfil del usuario"
            className="m-2 w-14 h-14 rounded-full object-cover border-[#7C7C7C] border-[0.5px]"
          />
       
        </>
      ) : (
        <>
         <p className="absolute top-16 right-7 text-[0.6rem] ">Perfil</p>
          <PersonIcon className="m-2 w-14 h-14 rounded-full fill-slate-200 bg-slate-400" />
         
        </>
      )}
    </div>
  </Link>
  )
}
