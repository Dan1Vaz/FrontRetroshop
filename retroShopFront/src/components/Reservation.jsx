/* eslint-disable react/prop-types */
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CreateReview from "../pages/CreateReview";
//componente que imprime la reserva individual a ser listada
const Reservation = ({ reservation }) => {
  return (
    <>
      <img
        src={`http://${import.meta.env.VITE_BASE_URL}:3001/${
          reservation.imageURL
        }`}
        alt=""
        className="h-full max-w-28 object-cover min-w-28"
      />
      <h2 className="capitalize font-bold text-[#3337a3]">
        {reservation.name}
      </h2>
      {reservation.status === "finalizada" ? <CreateReview /> : null}
      <ArrowRightIcon className="fill-[#3337a3]" />
    </>
  );
};

export default Reservation;
