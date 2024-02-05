/* eslint-disable react/prop-types */
// import CreateReservation from "./ProductCard/CreateReservation";
import PersonIcon from "@mui/icons-material/Person";
import { DetailedProductImage } from "./DetailedProductImage.jsx";
import CreateReservation from "../CreateReservation.jsx";
import { FavButtonDetailedProduct } from "./FavButtonDetailedProduct.jsx";
//componente que imprime el producto a detalle
const DetailedProduct = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="w-screen relative">
        <DetailedProductImage
          productImg1={data.product.imageURL}
          productImg2={data.product.imageURL2}
        />
        <FavButtonDetailedProduct />
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
        {data.seller[0].avatarURL ? (
          <img
            src={`http://${import.meta.env.VITE_BASE_URL}:3001/${
              data.seller[0].avatarURL
            }`}
            alt=""
            className="m-2 w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <PersonIcon className="m-2 w-20 h-20 rounded-full fill-slate-200 bg-slate-400" />
        )}
        <h1 className="font-medium">{data.seller[0].name}</h1>
      </section>
      <div className="flex justify-center mt-4 ">
        <CreateReservation productId={data.product.id} />
      </div>
    </div>
  );
};

export default DetailedProduct;

{
  /* <article className="bg-slate-950 w-9 h-9 flex justify-center items-center rounded-full">
  <PersonIcon sx={{ fontSize: 35 }} className="fill-slate-500" />
</article>; */
}

// `http://${import.meta.env.VITE_BASE_URL}:3001/${productImg1}`