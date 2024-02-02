import { useContext, useState } from 'react';
import baseURL from '../providers/ruta';
import { authContext } from '../providers/AuthProvider';
import PopUp from './PopUp';

const CreateReservation = (props) => {
  const { productId } = props;

  const [token] = useContext(authContext);
  const [link, setLink] = useState("");
  const [reservation, setReservation] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setStatusMessage('');
  };

  const enviar = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}:3001/reservation/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Éxito");
        setStatusMessage("Reserva solicitada");
        setStatusMessage(data.message);
      
        setShowPopup(true);
        setReservation(data.id);
        setReservation(...reservation, data.reservationToken);
        setLink("");
      } else {
      
        setStatusMessage(data.error);
        setShowPopup(true);
        setReservation(data.id);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);

      if (error.response && error.response.status === 400) {
        setStatusMessage(error.response.data.message);
      } else {
        setStatusMessage("Error al enviar los datos");
      }

      setShowPopup(true);
    }
  };

  return (
    <div>
      <button className="card_button" onClick={enviar}>
        Reservar
      </button>
      {showPopup && <PopUp message={statusMessage} onClose={closePopup} link={link} />}
    </div>
  );
};

export default CreateReservation;
