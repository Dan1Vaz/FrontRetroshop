import { Link } from "react-router-dom";
import useReservationsSeller from "../Hook/useReservationSeller"
import { ErrorMessage } from "../components/ErrorMessage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import ReservationListSeller from "../components/sellerProducts/ReservationListSeller";
//El componente de la pagina a imprimir
export const ReservationsSeller = () => {
  // nos traemos los estados
  const { reservations, loading, error } = useReservationsSeller();
  const [currentTab, setCurrentTab] = useState("");
  //el estado por defecto es en proceso
  const filteredReservations = reservations.filter((reservation) => {
    return reservation.status === currentTab;
  });
 

  const handlerSinReserva = () => {
    setCurrentTab("sin reserva");
  };
 
  const handlerPendiente = () => {
    setCurrentTab("pendiente");
  };
  const handlerInProcess = () => {
    setCurrentTab("en proceso");
  };
  const handlerFinished = () => {
    setCurrentTab("finalizada");
  };

  //intermedio de la carga
  if (loading)
    return (
      <p className="flex justify-center font-bold">
        Cargando, por favor espere...
      </p>
    );
  if (error)
    return <ErrorMessage message={error} className="flex justify-center" />;

  return (
    <div className="pb-20">
      {/* aqui se imprime el boton de volver atras que te manda al perfil del usuario */}
      <div className="flex justify-evenly py-10">
        <Link to={"/profile/menu"} className="absolute left-7">
          <ArrowBackIcon className="size-10" />
        </Link>
        <h1 className="text-2xl font-bold">Ventas</h1>
      </div>
      {/* aqui se imprime los botones que cambian los estados al clicar */}
      <nav className="flex flex-col justify-center text-center gap-5 py-4">
        {/* <button
          onClick={handlerInPendiente}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193]"
        >
          Pendiente
        </button> */}
        <div className="flex flex-row text-center justify-center  mr-4 mb-2">
        <button
          onClick={handlerSinReserva}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193]"
        >
          sin reserva
        </button>
        <button
          onClick={handlerPendiente}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193]"
        >
         pendiente
        </button>
        </div>
      <div className="flex flex-row text-center justify-center  mr-4 mb-2">
        <button
          onClick={handlerInProcess}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193]"
        >
          En Proceso
        </button>
        <button
          onClick={handlerFinished}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193]"
        >
          Finalizada
        </button>
        </div>
      </nav>
 
      <article className="flex flex-col flex-nowrap items-center content-end w-full">
        <ReservationListSeller
          reservations={filteredReservations}
          currentTab={currentTab}
        />
      </article>
    </div>
  );
};
