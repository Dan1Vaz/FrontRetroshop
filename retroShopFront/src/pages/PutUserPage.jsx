import { useContext, useEffect, useState } from "react";
import usePutUser from "../Hook/usePutUser";
import { authContext } from "../providers/AuthProvider";

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
    <>
      {/* Crear componente de loading */}
      {loading && <p>Loading... </p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data updated successfully</p>}

      <div className="flex justify-center items-center flex-col gap-[20px] h-screen">
        <div className="flex">
          <img
            src="/retroshop.svg"
            alt=""
            className="w-[300px] h-[100px]"
          />
        </div>
        <h1 className="text-2xl font-bold text-[#3337a3]">Modificar Perfil</h1>
        <form
          className="flex justify-center items-center flex-col gap-4"
          onSubmit={handleUpdateProduct}
        >
          <input
            type="text"
            id="name"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-black"
            placeholder="Nombre Nuevo"
            value={userData.name}
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-black"
            placeholder="Verifica tu password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <textarea
            id="biography"
            value={userData.biography}
            onChange={handleInputChange}
            className="w-[278px] h-[33px] bg-white  p-[20px] border border-black"
          ></textarea>
          <input
            type="file"
            id="avatar"
            className="w-[400px] h-[50px] bg-white ml-[95px] pt-[20px] pr-0 pl-0"
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
            className="w-[278px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
