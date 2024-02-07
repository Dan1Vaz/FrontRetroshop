/* eslint-disable react/prop-types */
// import CreateReservation from "./ProductCard/CreateReservation";
import PersonIcon from "@mui/icons-material/Person";
import { DetailedProductImage } from "../DetailedProduct/DetailedProductImage.jsx"
import DeletedProducts from "../DeletedProducts.jsx"
import { FavButtonDetailedProduct } from "../DetailedProduct/FavButtonDetailedProduct.jsx"
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PurcharseConfirmationPage } from "../../pages/PurcharseConfirmationPage.jsx";


const SellerProductDetail = ({ data }) => {
  
  return (
    <div className="flex flex-col pb-28 absolute">
      <div className="w-screen relative">
        <DetailedProductImage
          productImg1={data.product.imageURL}
          productImg2={data.product.imageURL2}
        />
        <FavButtonDetailedProduct />
        <Link to={"/"} className="">
          <ArrowBackIcon className=" relative size-10 bottom-72 left-7" />
        </Link>
      </div>
      <>
        <h1 className="text-2xl font-bold capitalize p-2">
          {data.product.name}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 p-2">
          {data.product.price}€
        </h2>
        <article className="p-2">{data.product.description}</article>
      </>

      <section className="flex items-center mt-5 gap-6 border-y-[0.5px] border-[#7C7C7C]  ">
        {data.seller.avatarURL ? (
          <img
            src={`http://${import.meta.env.VITE_BASE_URL}:3001/${data.seller.avatarURL}`}
            alt=""
            className="m-2 w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <PersonIcon className="m-2 w-20 h-20 rounded-full fill-slate-200 bg-slate-400" />
        )}
        <h2 className="font-medium"> {data.reservation.status}</h2>
      </section>

      <div className="flex justify-center mt-4 mb-4 ">
        {data.reservation.status === "finalizada" ? (
          <>
            <p className="flex justify-center mt-4 mb-4"> Retroshop siempre contigo </p>
          </>
        ) : data.reservation.status === "en proceso" ? (
          <div className='flex flex-col items-center justify-center '>
            <p>¡Te falta poco para finalizar el proceso!</p>
            <PurcharseConfirmationPage reservationId={data.reservation.id} />
          </div>
        ) : data.reservation.status === "pendiente" ? (
          <>
            <p>Ponte en contacto con el comprador. Toda la información está en tu correo electrónico.</p>
          </> 
        ) : data.reservation.status === "sin reservas" ? (
          <>
            <DeletedProducts productId={data.product.id} />
            <Link to={`/profile/modify/${data.product.id}`}>
              <button className="p-2">
                <EditNoteIcon className="text-xl" />
              </button>
            </Link>
          </>
        ) : null
        }
      </div>
    </div>
  )
}

export default SellerProductDetail;
