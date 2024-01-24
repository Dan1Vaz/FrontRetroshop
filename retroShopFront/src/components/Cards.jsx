import { Link } from 'react-router-dom' 


const Cards = ({item}) => {
  return (
    <Link  className="link_cards " to ={`reser/${item.id}`}>
    <div className='cards'>
     <div className="image_cards">
     <img src={`http://localhost:3001/${item.imageURL}`} alt="" className='image_cards_1' />

        <img src={`http://localhost:3001/${item.imageURL2}`} alt="" className='image_cards_2' />

   
<h2>{item.name}</h2>
<p>{item.price}</p>
    </div>  </div>
    </Link>
  )
}

export default Cards