import { ErrorMessage } from "../../components/ErrorMessage.jsx";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFavoritesProducts } from "../../Hook/Favorites/useFavoritesProducts.jsx";

import { authContext } from "../../providers/AuthProvider";
import FavoritesList from "../../components/Favorites/FavoritesList.jsx";
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
      {/* aqui se imprime el boton de volver atras que te manda al perfil del usuario */}
      <div className="flex justify-evenly py-10">
        <Link to={"/profile/menu"} className="absolute left-7">
          <ArrowBackIcon className="size-10 fill-[#000000]" />
        </Link>
        <h1 className="text-2xl font-bold text-[#000000]">
          Productos Favoritos
        </h1>
      </div>
      {/* aqui se imprime los botones que cambian los estados al clicar */}

      <article className="flex flex-col flex-nowrap items-center content-end w-full">
        <FavoritesList products={data} />
      </article>
    </div>
  );
};
