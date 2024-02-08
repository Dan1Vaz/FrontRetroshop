/* eslint-disable react/prop-types */
import { useContext, useState } from "react"; 
import useCreateReview from "../Hook/useCreateReview"; 
import { authContext } from "../providers/AuthProvider"; 
// import { useParams } from "react-router-dom"; 
 
const Star = ({ selected, onSelect }) => ( 
    <span 
    onClick={onSelect} 
    className={`text-2xl ${selected ? 'text-yellow-500' : 'text-gray-500'}`} 
  > 
    {selected ? "★" : "☆"} 
  </span> 
 
); 
 
const CreateReview = ({productId}) => { 
  const [token] = useContext(authContext); 
 
  const { insertReview } = useCreateReview(); 
 
  const [selectedStars, setSelectedStars] = useState(0);  
  const [statusMessage, setStatusMessage] = useState(""); 
 
  const handleRate = (rating) => { 
     
    setSelectedStars(rating); 
  }; 
 
  const handleUpdateReview = async (e) => { 
    e.preventDefault(); 
 
    try { 
      await insertReview(productId, selectedStars, token);  
      setStatusMessage("Review enviada exitosamente."); 
      console.log("Votos: " + selectedStars); 
    } catch (error) { 
      console.error("Error al enviar la review:", error); 
      setStatusMessage("Error al enviar la review."); 
    } 
  }; 
 
  return ( 
    <div> 
      <form onSubmit={handleUpdateReview}> 
        <div>  
            {/* constructor  */} 
          {[...Array(5)].map((_, index) => ( 
            <Star 
              key={index} 
              selected={index < selectedStars} 
              onSelect={() => handleRate(index + 1)} 
            /> 
          ))} 
        </div> 
        <div className="flex justify-center"><button type="submit" className="bg-[#3337a3] px-2 font-bold rounded-full text-[#FE7193]">Votar</button></div>
        
      </form> 
      {/* {statusMessage && <p>{statusMessage}</p>} */} 
    </div> 
  ); 
}; 
 
export default CreateReview;