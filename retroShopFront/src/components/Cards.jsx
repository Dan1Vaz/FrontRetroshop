/* eslint-disable react/prop-types */

import CreateReservation from './CreateReservation'




const Cards = ({item}) => {
  return (
    
    <div className='cards'>
     <div className="image_cards">
     <img src={`http://localhost:3001/${item.imageURL}`} alt=""  className="w-[50px] h-[50px]" />

        <img src={`http://localhost:3001/${item.imageURL2}`} alt=""  className="w-[50px] h-[50px]" />

   
<h2>{item.name}</h2>
<p>{item.price}</p>
<CreateReservation productId={item.id}/>


    </div>  </div>
 
  
  )
}

export default Cards