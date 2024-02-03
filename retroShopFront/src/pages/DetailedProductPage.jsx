import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DetailedProduct from "../components/DetailedProduct";
import useProductById from "../Hook/useProductById";
// import BackButton from "../components/BackButton";
//El componente de la pagina a imprimir
export const DetailedProductPage = () => {
  // nos traemos los estados
  const { product, loading, error } = useProductById();
  // console.log(product);

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
      <div className="flex justify-center py-5">
        {/* <BackButton /> */}
        <Link to={"../"}>
          <ArrowBackIcon className="size-7" />
        </Link>
      </div>

      {/* aqui se imprime el componente que muestra el producto */}
      <DetailedProduct product={product} />
    </>
  );
};
