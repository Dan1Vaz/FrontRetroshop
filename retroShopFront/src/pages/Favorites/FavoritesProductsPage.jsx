import { ErrorMessage } from "../../components/ErrorMessage.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useFavoritesProducts } from "../../Hook/Favorites/useFavoritesProducts.jsx";
import { authContext } from "../../providers/AuthProvider";
import FavoritesList from "../../components/Favorites/FavoritesList.jsx";
import BackButton from "../../components/BackButton.jsx";
//El componente de la pagina a imprimir
export const FavoritesProductsPage = () => {
  const [token] = useContext(authContext);
  console.log(token);

  if (!token) {
    return <Navigate to="/profile/login" />;
  }
  // nos traemos los estados
  const { data, error, loading } = useFavoritesProducts(token);
  console.log("esto es lo q devuelve el array", data);
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
    <div className="pb-20">
      {/*titulo y backbutton */}
      <div className="flex justify-evenly py-10">
        <div className="absolute left-7 top-[38px]">
          <BackButton />
        </div>
        <h1 className="text-2xl font-bold text-[#000000]">
          Productos Favoritos
        </h1>
      </div>
      {/* aqui se imprime la lista */}

      <article className="flex flex-col flex-nowrap items-center content-end w-full">
        <FavoritesList products={data} />
      </article>
    </div>
  );
};
