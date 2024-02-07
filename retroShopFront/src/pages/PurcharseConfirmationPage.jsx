import React, { useContext, useState } from 'react'
import { authContext } from '../providers/AuthProvider';

export const PurcharseConfirmationPage = ({reservationId}) => {
  console.log(reservationId);
    const [reservationLocation, setReservationLocation] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [token] = useContext(authContext);
    const [error, setError] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch( `http://${import.meta.env.VITE_BASE_URL}:3001/products/purchaseConfirmation/${reservationId}`,{
        method: 'PATCH',
        headers: {
         authorization: `Bearer ${token}` ,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reservationLocation,
          reservationDate,
     
        })
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data); 
      })
      .catch(error => {
        setError(error.message);
      });
    };
  
    return (
      <div className='flex flex-col items-center justify-center gap-4'>
        
        {error && <div>Error: {error}</div>}
        <form className='flex flex-col items-center justify-center'onSubmit={handleSubmit}>
          
    
            <input
              type="text"
              placeholder='Ubicación de la entrega'
              value={reservationLocation}
              onChange={(e) => setReservationLocation(e.target.value)}
              className='mb-4'
              required
            />
          
          
          
            <input
              type="date"
              placeholder='Fecha entrega'
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
              className='mb-4'
              required
            />
      
     
        
          <button className="hover:bg-[#D9D9D9] px-10 py-2 font-bold rounded-full bg-[#FE7193]" type="submit">Confirma la reserva</button>
        </form>
      </div>
    );
  };
 

