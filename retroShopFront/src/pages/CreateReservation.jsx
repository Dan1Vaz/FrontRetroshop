import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider';
import PopUp from '../components/PopUp';

const CreateReservation = () => {
  const {productId} = useParams();
  
  console.log(productId);
  const [token,] = useContext(authContext);

  const [reservation, setReservation] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setStatusMessage('');
  };


  const enviar = async () => {
    try {
   
      const response = await fetch(`http://localhost:3001/reservation/${productId}`, {
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
        setStatusMessage(data.message),
        console.log(data.message)
        console.log(data.email)
        setShowPopup(true);
        setReservation(data.id)
        console.log(data.id);
       setReservation(...reservation,data.reservationToken)
      } else {
      
        console.log(data);
        setStatusMessage(data.message );
        setShowPopup(true);
        setReservation(data.id)
        console.log("data.message")

        console.log(data.message)


      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setStatusMessage("Error al enviar los datos");
      setShowPopup(true);
     
    }
  };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setReservation({ ...reservation, [id]: value }); // Use [id] to dynamically set the property
//   };

  return (
  
      

      <div>
          <button onClick={enviar}>Enviar</button>
          {showPopup && <PopUp message={statusMessage} onClose={closePopup} />}
        </div>
      );
  }
export default CreateReservation;
