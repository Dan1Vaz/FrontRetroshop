import { useEffect, useState } from "react";
import baseURL from "../providers/ruta";


const VerStatusReserva = ({productId}) => {
  
    const [status, setStatus] = useState("");

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch(`http://localhost:3001/reservaStatus/${productId}`
                );
            

                const data = await response.json();
              if(!data){
                setStatus("sin reservas")
              } else{
                setStatus(data.status); 
              }
            } catch (error) {
                console.error("Error al obtener el estado de la reserva:", error);
                setStatus("Error al obtener el estado de la reserva");
            }
        };

        fetchStatus();
    }, [productId]);

    return (
        <div className=" bg-red text-center">
            <p className="bg-white text-red-500">{status}</p>
        </div>
    );
};

export default VerStatusReserva;
