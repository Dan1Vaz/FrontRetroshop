/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ReserFinished } from "../ReserFinished";
import Reservation from "../Reservation";
import { Reserpending } from "../Reserpending";
import { ProductsBlank } from "../ProductsBlank";

const ReservationListSeller = ({ reservations, currentTab }) => {
  return reservations.length ? (
    <ul className="w-full">
      {reservations.map((reservation) => (
        // <Link to={`/products/product/?id=${reservation.id}`} key={reservation.id}>
        <Link
          to={`/products/productSeller/?id=${reservation.id}`}
          key={reservation.id}
        >
          <li className="flex bg-[#D9D9D9] h-24 w-full justify-between items-center">
            <Reservation reservation={reservation} />
          </li>
        </Link>
      ))}
    </ul>
  ) : currentTab === "sin reserva" ? (
    <ProductsBlank />
  ) : currentTab === "pendiente" ? (
    <Reserpending />
  ) : (
    <ReserFinished />
  );
};

export default ReservationListSeller;
