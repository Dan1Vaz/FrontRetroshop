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
      <div className="hidden lg:flex lg:flex-col lg:items-center">
        {data.avatarURL ? (
          <div className="hidden lg:flex lg:items-center">
            <img
              src={`http://${import.meta.env.VITE_BASE_URL}:3001/${
                data.avatarURL
              }`}
              alt="Foto de perfil del usuario"
              className="m-2 w-5 h-5 rounded-full object-cover border-[#7C7C7C] border-[0.5px]"
            />
            <p className="">Tú</p>
          </div>
        ) : (
          <div className="hidden lg:flex lg:items-center">
            <PersonIcon className="m-2 w-8 h-8 rounded-full fill-slate-200 bg-slate-400" />
            <p className="">Tú</p>
          </div>
        )}
      </div>
    </Link>
  );
};
