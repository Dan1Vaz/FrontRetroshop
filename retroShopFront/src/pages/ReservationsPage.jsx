import { Link } from "react-router-dom";
import useReservations from "../Hook/useReservations";
import ReservationList from "../components/ReservationList";
import { ErrorMessage } from "../components/ErrorMessage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
//El componente de la pagina a imprimir
export const ReservationsPage = () => {
  // nos traemos los estados
  const { reservations, loading, error } = useReservations();
  const [currentTab, setCurrentTab] = useState("en proceso");
  //el estado por defecto es en proceso
  console.log(reservations);
  // console.log(currentTab);
  const filteredReservations = reservations.filter((reservation) => {
    return reservation.status === currentTab;
  });
  console.log(filteredReservations);

  // handlers para cambiar los estados segun cliques
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
          <ArrowBackIcon className="size-10 fill-[#000000]" />
        </Link>
        <h1 className="text-2xl font-bold text-[#000000]">Reservas</h1>
      </div>
      {/* aqui se imprime los botones que cambian los estados al clicar */}
      <nav className="flex justify-evenly py-4">
        <button
          onClick={handlerInProcess}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193] text-[#000000]"
        >
          En Proceso
        </button>
        <button
          onClick={handlerFinished}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193] text-[#000000]"
        >
          Finalizada
        </button>
      </nav>
      {/* aqui se imprime el componente que trae la lista de reservas */}
      <article className="flex flex-col flex-nowrap items-center content-end w-full">
        <ReservationList
          reservations={filteredReservations}
          currentTab={currentTab}
        />
      </article>
    </div>
  );
};

// {/* aqui se imprime los botones que cambian los estados al clicar */}
// <nav className="flex justify-evenly py-4">
// <button
//   onClick={handlerInProcess}
//   className={`bg-${
//     currentTab === "en proceso" ? "[#FE7193]" : "[#D9D9D9]"
//   } px-10 py-2 font-bold rounded-full`}
// >
//   En Proceso
// </button>
// <button
//   onClick={handlerFinished}
//   className={`bg-${
//     currentTab === "finalizada" ? "[#FE7193]" : "[#D9D9D9]"
//   } px-10 py-2 font-bold rounded-full`}
// >
//   Finalizada
// </button>
// </nav>
