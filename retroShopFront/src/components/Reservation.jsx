/* eslint-disable react/prop-types */
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
//componente que imprime la reserva individual a ser listada
const Reservation = ({ reservation }) => {
  return (
    <>
      <img src={`/profile/products/${reservation.imageURL}`} alt="" className="h-full"/>
      <h2 className="capitalize font-bold">{reservation.name}</h2>
      <ArrowRightIcon />
    </>
  );
};

export default Reservation;
