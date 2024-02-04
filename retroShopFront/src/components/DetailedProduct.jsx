/* eslint-disable react/prop-types */
// import CreateReservation from "./ProductCard/CreateReservation";
import { FavButton } from "./ProductCard/FavButton";
import { ProductImage } from "./ProductCard/ProductImage";
import CreateReservation from "./ProductCard/CreateReservation";
//componente que imprime el producto a detalle
const DetailedProduct = ({ product }) => {
  console.log(product);
  return (
    <article className="flex flex-col flex-nowrap items-center">
      <ProductImage
        productImg1={`http://${import.meta.env.VITE_BASE_URL}:3001/${
          product.imageURL
        }`}
        productImg2={`http://${import.meta.env.VITE_BASE_URL}:3001/${
          product.imageURL2
        }`}
       className=""/>
      <h1 className="text-2xl font-bold capitalize">{product.name}</h1>
      <h2 className="text-2xl font-semibold text-gray-700">{product.price}€</h2>
      <h2 className="text-2xl font-semibold">Descripcion: </h2>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        disabled
        className="border-double border-4 border-[#070a33] rounded-lg p-5 m-2"
      >
        {product.description}
      </textarea>
      <section className="flex justify-evenly py-4 mb-8">
        <CreateReservation productId={product.id} />
        <FavButton />
      </section>
      <div>Review</div>
    </article>
  );
};

export default DetailedProduct;
