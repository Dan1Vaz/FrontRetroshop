/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


import { ReservBlank } from "../ReservBlank";
import { ReserFinished } from "../ReserFinished";
import Reservation from "../Reservation";
import { Reserpending } from "../Reserpending";
import{ReservaProcess} from "../ReservaProcess"

const ReservationListSeller = ({ reservations, currentTab }) => {

  return reservations.length ? (
    <ul className="w-full">
      {reservations.map((reservation) => (
        <Link to={`/products/product/?id=${reservation.id}`} key={reservation.id}>
        <li className="flex bg-[#D9D9D9] h-24 w-full justify-between items-center">
          <Reservation reservation={reservation} />
        </li>
        </Link>
      ))}
    </ul>
  ) :

   currentTab === "sin reserva" ? (
    <ReservBlank />
  ) : currentTab === "pendiente" ? (
    <Reserpending />
  ) : currentTab === "en proceso" ? (
    <ReservaProcess />
  ) : (
    <ReserFinished/>
     
    )
};


export default ReservationListSeller