import { ProductCard } from "../components/ProductCard/ProductCard";
import { useSearchedProducts } from "../Hook/useSearchedProducts";

const SearchProductsPage = () => {
  //const { searchedProducts } = useSearch();
  // console.log(
  //   "Productos buscados en la pagina de resultados",
  //   searchedProducts
  // );

  const products = useSearchedProducts();

  return (
    <>
      <main>
        <ul className="productsTable grid grid-cols-2 gap-4 justify-items-center w-full pt-[15px]">
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id} className="max-w-[154px]">
                <ProductCard
                  productCategory={product.category}
                  productImg1={product.imageURL}
                  productImg2={product.imageURL2}
                  productName={product.name}
                  productPrice={product.price}
                />
              </li>
            ))
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </ul>
      </main>
    </>
  );
};

export default SearchProductsPage;
