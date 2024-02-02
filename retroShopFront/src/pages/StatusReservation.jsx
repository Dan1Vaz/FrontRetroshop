import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

export const StatusReservation = () => {
  const { reservationId } = useParams();
  const [token] = useContext(authContext);
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("Reserva en proceso...");
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/reservation-update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reservationId: reservationId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatusMessage(data.message);
        navigate("/profile/products/user");
      })
      .catch((error) => {
        console.error("Error en la verificación:", error.message);
        setStatusMessage(`Error en la verificación: ${error.message}`);
      });
  }, [reservationId, navigate]);
};

export default StatusReservation