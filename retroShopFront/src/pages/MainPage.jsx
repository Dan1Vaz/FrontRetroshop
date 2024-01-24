import { ProductCard } from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import useProducts from "../Hook/useProducts";

export const MainPage = () => {
  const { products, loading, error } = useProducts();
  console.log(products);
  return (
    <>
      <header className="flex h-[135px] justify-center items-center">
        <h1 className="font-bold text-[#080C89] pl-2">
          COMPRA Y VENDE LOS MEJORES PRODUCTOS RETRO EN NUESTRA PÁGINA
        </h1>
      </header>
      <main className="min-h-[1350px]">
        <div className="flex items-center justify-center border-y-2 border-[#7C7C7C] h-[76px]">
          <h2 className="font-bold text-[#080C89] ">PRODUCTOS DESTACADOS</h2>
        </div>
        <ul className="productsTable grid grid-cols-2 gap-4 justify-items-center w-full pt-[15px]">
          {products.map((product) => (
            <li key={product.id} className="max-w-[154px]">
              <ProductCard
                productCategory={product.category}
                productImg1={product.imageURL}
                productImg2={product.imageURL2}
                productName={product.name}
                productPrice={product.price}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
