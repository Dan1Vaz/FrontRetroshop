import { ProductCard } from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import useProducts from "../Hook/useProducts";
import VideoMain from "../components/VideoMainPage";

export const MainPage = () => {
  const { products, loading, error } = useProducts(20);
  //console.log(products);
  return (
    <>
      <header className="flex h-[135px] w-full justify-center items-center">
        <VideoMain></VideoMain>
      </header>
      <main className="pb-28">
        <div className="flex items-center justify-center border-y-2 border-[#7C7C7C] h-[76px] mt-8">
          <h2 className="font-bold text-[#080C89] ">PRODUCTOS DESTACADOS</h2>
        </div>
        <ul className="productsTable grid grid-cols-2 gap-4 justify-items-center w-full pt-[15px]">
          {products.map((product) => (
            <li key={product.id} className="max-w-[154px]">
              <Link to={`/products/product/?id=${product.id}`} key={product.id}>
              <ProductCard
                productCategory={product.category}
                productImg1={product.imageURL}
                productImg2={product.imageURL2}
                productName={product.name}
                productPrice={product.price}
                productId={product.id}
                // {...console.log(product.id)}
              />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
