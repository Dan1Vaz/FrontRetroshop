import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { LogOutButton } from "../components/LogOutButton";
import useGetUser from "../Hook/useGetUser";


export const ProfilePage = () => {
  const [token] = useContext(authContext);
  const navigate = useNavigate();
  const btnNav = ()=>{navigate("/profile/reservations")};
  const btnNav2 = ()=>{navigate("/profile/products/user")};
  const btnNav3 = ()=>{navigate("/profile/perfil")};
  const {data,loading, error} = useGetUser()

  if (!token) {
    return <Navigate to="/profile/login" />;
  }
  return (
    <div className="flex b items-center flex-col gap-[20px] bg-[#F6F6F6]">
      <div className="w-[375px] h-[160px] bg-white">
        <img
          src={`http://${import.meta.env.VITE_BASE_URL}:3001/${data.avatarURL}`}
          alt=""
          className="w-[73px] h-[73px] relative top-[74px] left-[26px]"
        />
        <h1 className="w-[87px] h-[21px] top-[25px] left-[145px] relative font-family Roboto font-size 15px font-weight 500 line-height 26px text-transform uppercase">
         {data.name}
        </h1>
      </div>

      <div className="pt-50px w-[375px] h-[104px] bg-white mt-[30px]">
        <h2 className="relative top-[-25px] left-[18px] text-lg">
          Transacciones
        </h2>

        <div className="w-[375px] h-[40px] d-flex flex-row">
          <button
            onClick={btnNav}
            className="w-[375px] h-[40px] flex flex-row justify-start pb-[6px]"
          >
            <img
              src="/handshake.svg"
              alt=""
              className="inline pl-[12px] pr-[6px] object-scale-down w-[32] h-[20]"
            />
            <h2 className="inline pl-[6px] h-[4px]">Reservas</h2>
            <img
              src="/vector.svg"
              alt=""
              className="inline ml-auto w-[12px] h-[20px]"
            />
          </button>
        </div>
        <div className="w-[424px] h-[40px] d-flex flex-row">
          <button
            type="button"
            onClick={btnNav2}
            className="w-[424px] h-[40px] flex flex-row justify-start pb-[6px] pt-[6px]"
          >
            <img
              src="/salesIcon.svg"
              alt=""
              className="inline pl-[12px] object-scale-down w-[27] h-[20]"
            />
            <h2 className="inline pl-[6px] h-[6px]">Ventas</h2>
            <img
              src="/vector.svg"
              alt=""
              className="inline ml-auto w-[12px] h-[20px]"
            />
          </button>
        </div>
      </div>

      <div className="pt-100px w-[424px] h-[60px] bg-white mt-[80px] d-flex flex-row">
        <button 
        type="button"
        onClick={btnNav3}
        className="w-[424px] h-[40px] flex column pt-[6px]">
          <img
            src="/settings.svg"
            alt=""
            className="object-scale-down w-[32] h-[20] pl-[12px] pr-[6px]"
          />
          <h2 className="inline pl-[6px] text-lg pt-[6px]">Configuración</h2>
          <img
            src="/vector.svg"
            alt=""
            className="inline ml-auto w-[12px] h-[20px]"
          />
        </button>
      </div>
      <LogOutButton />
    </div>
  );
};
