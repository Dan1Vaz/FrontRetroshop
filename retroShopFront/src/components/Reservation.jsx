/* eslint-disable react/prop-types */
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
//componente que imprime la reserva individual a ser listada
const Reservation = ({ reservation }) => {
  return (
    <>
      <img src={`${import.meta.env.VITE_BASE_URL}:3001/${reservation.imageURL}`} alt="" className="h-full max-w-28 object-cover min-w-28"/>
      <h2 className="capitalize font-bold">{reservation.name}</h2>
      <ArrowRightIcon />
    </>
  );
};

export default Reservation;


