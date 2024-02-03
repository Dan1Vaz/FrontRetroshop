/* eslint-disable react/prop-types */
import { FavButton } from "./ProductCard/FavButton";
import { ProductImage } from "./ProductCard/ProductImage";

//componente que imprime el producto a detalle
const DetailedProduct = ({ product }) => {
  console.log(product);
  return (
    <article className="flex flex-col flex-nowrap content-end w-full items-stretch">
      <ProductImage
        productImg1={`http://${import.meta.env.VITE_BASE_URL}:3001/${
          product.imageURL
        }`}
        productImg2={`http://${import.meta.env.VITE_BASE_URL}:3001/${
          product.imageURL2
        }`}
      />
      <h1 className="text-2xl font-bold capitalize">{product.name}</h1>
      <h2 className="text-2xl font-semibold text-gray-700">{product.price}€</h2>
      <h2 className="text-2xl font-semibold">Descripcion: </h2>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        disabled
        className="border-double border-4 border-[#070a33] rounded-lg p-5"
      >
        {product.description}
      </textarea>
      <section className="flex justify-evenly py-4 mb-8">
        <button
          // onClick={handler}
          className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:bg-[#FE7193]"
        >
          Reservar
        </button>
        <FavButton />
      </section>
      <div>Review</div>
    </article>
  );
};

export default DetailedProduct;
