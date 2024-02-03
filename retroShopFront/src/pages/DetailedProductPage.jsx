import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useState } from "react";
import DetailedProduct from "../components/DetailedProduct";
import useProductById from "../Hook/useProductById";
//El componente de la pagina a imprimir
export const DetailedProductPage = () => {
  // nos traemos los estados
  const { product, loading, error } = useProductById();
  // console.log(products);

  //intermedio de la carga
  if (loading)
    return (
      <p className="flex justify-center font-bold">
        Cargando, por favor espere...
      </p>
    );
  if (error)
    return <ErrorMessage message={error} className="flex justify-center" />;

  return (
    <>
      {/* aqui se imprime el boton de volver atras */}
      <div className="flex justify-evenly py-10">
        <Link to={"../"} className="absolute left-7">
          <ArrowBackIcon className="size-10" />
        </Link>
      </div>
      
      {/* aqui se imprime el componente que muestra el producto */}
      <article className="flex flex-col flex-nowrap items-center content-end w-full">
        <DetailedProduct product={product}
        />
      </article>
    </>
  );
};
