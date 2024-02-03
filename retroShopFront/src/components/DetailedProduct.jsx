/* eslint-disable react/prop-types */
//componente que imprime el producto a detalle
const DetailedProduct = ({ product }) => {
  console.log(product)
  return (<div>{product.name}</div>
  );
};

export default DetailedProduct;
