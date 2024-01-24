// import React, { useContext, useState } from 'react';
// import { authContext } from '../providers/AuthProvider';
// import useRese from '../Hook/useRese';
// import { useNavigate } from 'react-router-dom';
// import useProducts from '../Hook/useProducts';

// const Reservetion = () => {
//   const [token] = useContext(authContext);
//   const navigate = useNavigate();
//   const [pinta, setPinta] = useState([]);
//   const { reservations, error, loading } = useRese();
//   const { products } = useProducts();
//   const [filterProduct, setFilterProduct] = useState([]);

//   // Check if token is not available, redirect to login
//   if (!token) {
//     navigate('/profile/login');
//     return null; // Add this line to prevent rendering the component further
//   }

//   const showInProcessReservations = () => {
//     setPinta(reservations.filter((reservation) => reservation.status === 'pendiente'));
//     setFilterProduct([]); // Reset filtered products when changing reservations
//   };

//   const showFinishedReservations = () => {
//     const finishedReservations = reservations.filter((reservation) => reservation.status === 'finalizada');
//     setPinta(finishedReservations);
    
//     // Assuming reservation.productId is the product id
//     const productIds = finishedReservations.map((reservation) => reservation.productId);
//     setFilterProduct(products.filter((product) => productIds.includes(product.productId)));
//   };

//   return (
//     <div>
//       {loading && <p>Loading reservations...</p>}
//       {error && <p>Error: {error}</p>}

//       <div>
//         <button className="w-[150px] h-[33px] bg-[#3337a3] p-[20px] text-white py-2 px-4" onClick={showInProcessReservations}>
//           In Process
//         </button>
//         <button className="w-[150px] h-[33px] bg-[#3337a3] p-[20px] text-white py-2 px-4" onClick={showFinishedReservations}>
//           Finished
//         </button>
//       </div>

//       {pinta.map((reservation) => (
//         <div key={reservation.id}>
//           <p>{reservation.status}</p>
//           <p>{reservation.productId}</p>
//         </div>
//       ))}

//       <div>
    
//         {filterProduct.map((product) => (
//           <div key={product.productId}>
//             <p>Product: {product.productName}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reservetion;
