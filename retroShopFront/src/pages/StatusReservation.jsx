import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import baseURL from '../providers/ruta';

const StatusReservation = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState('Reserva en proceso...');
  function autolink() {
    navigate("/profile/login");
  }

  const [, setStatus] = useState({
    reservationId:""
  });

  useEffect(() => {

    setStatus({
     reservationId: reservationId
    });
    fetch(`${baseURL}/reservation-update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservationId:reservationId,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        setStatusMessage(data.message);
      } else {
        throw new Error('Failed verification');
      }
    })
    .catch(error => {
      console.error("Error en la verificación:", error.message);
      setStatusMessage(`Error en la verificación: ${error.message}`);
    });
  }, [reservationId]);

  return (
    <div>
      <div>Status: {statusMessage}</div>
    </div>
  );
}

export default StatusReservation;
