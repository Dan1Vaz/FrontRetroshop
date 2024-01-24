import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StatusReservation = () => {
  const { reservationToken, reservationId } = useParams();
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState('Reserva en proceso...');

  useEffect(() => {
    fetch('http://localhost:3001/reservation-update', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservationToken: reservationToken,
        reservationId: reservationId,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        setStatusMessage(data.message);
        // Lógica de redirección dinámica según el resultado de la verificación
        if (data.success) {
          navigate("/success");
        } else {
          navigate("/error");
        }
      } else {
        throw new Error('Failed verification');
      }
    })
    .catch(error => {
      console.error("Error en la verificación:", error.message);
      setStatusMessage(`Error en la verificación: ${error.message}`);
    });
  }, [reservationToken, reservationId, navigate]);

  return (
    <div>
      <div>Status: {statusMessage}</div>
    </div>
  );
}

export default StatusReservation;