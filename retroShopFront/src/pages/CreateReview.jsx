
import { useContext, useState } from "react"; 
import useCreateReview from "../Hook/useCreateReview"; 
import { authContext } from "../providers/AuthProvider"; 
import PopUp from '../components/PopUp';

const Star = ({ selected, onClick }) => ( 
  <span 
    onClick={onClick} 
    className={`text-2xl ${selected ? 'text-yellow-500' : 'text-gray-500'}`} 
  > 
    {selected ? "★" : "☆"} 
  </span> 
); 

const CreateReview = ({ productId }) => { 
  const [token] = useContext(authContext); 
  const { insertReview } = useCreateReview(); 
  const [selectedStars, setSelectedStars] = useState(0);  
  const [statusMessage, setStatusMessage] = useState(""); 
  const [showPopup, setShowPopup] = useState(false);

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
    } finally {
      setShowPopup(true);
    }
  }; 
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };
 
  return ( 
    <div> 
      <form onSubmit={handleUpdateReview}> 
        <div>  
          {/* Constructor de estrellas para la revisión */} 
          {[...Array(5)].map((_, index) => ( 
            <Star 
              key={index} 
              selected={index < selectedStars} 
              onClick={() => handleRate(index + 1)} 
            /> 
          ))} 
        </div> 
        <div className="flex justify-center">
          <button type="submit" className="bg-[#3337a3] px-2 font-bold rounded-full text-[#FE7193]">
            Votar
          </button>
        </div>
      </form> 
      {showPopup && <PopUp message={statusMessage} onClose={handleClosePopup} link="/profile/menu" />}
    </div> 
  ); 
}; 
 
export default CreateReview;
