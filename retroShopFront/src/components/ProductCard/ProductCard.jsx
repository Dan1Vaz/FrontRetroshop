import { FavButton } from "./FavButton";
import { ProductCategory } from "./ProductCategory";
import { ProductDetails } from "./ProductDetails";
import { ProductImage } from "./ProductImage";

export const ProductCard = ({
  productCategory,
  productImg1,
  productImg2,
  productName,
  productPrice,
}) => {
  return (
    <div className="ProductCard bg-[#999999] w-[154px] h-[222px] border-2 rounded-xl shadow-xl relative">
      <ProductCategory productCategory={productCategory} />
      <ProductImage productImg1={productImg1} productImg2={productImg2} />
      <ProductDetails productName={productName} productPrice={productPrice} />
      <FavButton />
    </div>
  );
};
