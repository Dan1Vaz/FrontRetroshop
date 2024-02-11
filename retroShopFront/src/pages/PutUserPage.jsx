import { useContext, useEffect, useState } from "react";
import usePutUser from "../Hook/usePutUser";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const PutUserPage = () => {
  const [token] = useContext(authContext);
  const { data, error, loading, putUser } = usePutUser();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    biography: "",
    avatar: null,
  });

  useEffect(() => {
    if (data) {
      // Si hay datos disponibles, actualiza el estado userData
      setUserData({
        name: data.name,
        password: data.password,
        biography: data.biography,
        avatar: data.avatar,
      });
    }
  }, [data]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    // Recojo cuerpo
    const updateBody = {
      name: userData.name,
      password: userData.password,
      biography: userData.biography,
      avatar: userData.avatar,
    };
    // Llama a la función putUser del hook
    await putUser(updateBody, token);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, avatar: file });
  };

  return (
    <div className=" create flex justify-center items-center flex-col py-3 mb-[100px] md:mb-0 md:bg-red-50  w-screen h-full">
      {/* Crear componente de loading */}
      {loading && <p>Loading... </p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data updated successfully</p>}
      <div className=" md:bg-white md:shadow-[0_0_30px_rgba(0,0,0,0.3)] rounded-[10px] p-3 md:px-14 md:pb-8">
        <div className="flex justify-evenly pt-10">
          <Link to={"/profile/menu"} className="absolute left-7">
            <ArrowBackIcon className="size-10 fill-[#000000]" />
          </Link>
          <h1 className="text-2xl font-bold text-[#000000]">
            Modificar Perfil
          </h1>
        </div>
        <form
          className="flex justify-center items-center flex-col gap-1 mt-16"
          onSubmit={handleUpdateProduct}
        >
          <label
            htmlFor="name"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-[#db2777] rounded-md"
            placeholder="Nombre Nuevo"
            value={userData.name}
            onChange={handleInputChange}
          />
          <label
            htmlFor="password"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="w-[278px] h-[33px] bg-white p-[20px] border border-[#db2777] rounded-md"
            placeholder="Verifica tu Clave"
            value={userData.password}
            onChange={handleInputChange}
          />
          <label
            htmlFor="avatar"
            className="block text-base font-medium text-[#3337a3] w-[281px] p-2"
          >
            Foto de Perfil:
          </label>
          <input
            type="file"
            id="avatar"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
            onChange={handleFileChange}
          />
          {/* Mostrar la foto del usuario si existe */}
          {userData.avatar && (
            <img
              src={URL.createObjectURL(userData.avatar)}
              alt="Avatar del usuario"
              className="w-[150px] h-[150px]"
            />
          )}
          <button
            type="submit"
            className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm mt-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
