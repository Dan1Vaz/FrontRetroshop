import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const [token] = useContext(authContext);
  const navigate = useNavigate();
  if (!token) {
    return <Navigate to="/profile/login" />;
  }
  return (
    <div className="flex items-center flex-col gap-[20px] h-screen bg-[#F6F6F6]">
      <div className="w-[424px] h-[160px] bg-white">
        <img
          src="/iconProfileEmpty.svg"
          alt=""
          className="w-[73px] h-[73px] relative top-[74px] left-[46px]"
        />
        <h1 className="w-[87px] h-[21px] top-[25px] left-[145px] relative font-family Roboto font-size 15px font-weight 500 line-height 26px text-transform uppercase">
          USER NAME
        </h1>
      </div>

      <div className="pt-100px w-[424px] h-[104px] bg-white mt-[80px]">
        <h2 className="relative top-[-25px] left-[18px] text-lg">
          Transacciones
        </h2>

        <div className="w-[424px] h-[40px] d-flex flex-row">
          <button
            type="button"
            // onClick={navigate("/")}
            className="w-[424px] h-[40px] flex flex-row justify-start pb-[6px]"
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
            // onClick={navigate("/")}
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
        // onClick={navigate("/")}
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
    </div>
  );
};

export default ProfilePage;
