import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSearchedProducts } from "../Hook/useSearchedProducts";
import LoginPage from "../pages/LoginPage";
import { useSearch } from "../providers/SearchContext";
import { Button } from "@mui/material";

export const Navbar = () => {
  //const { searchedProducts, setSearchedProducts } = useSearch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  //const [searchedProducts, setSearchedProducts] = useState([]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`/products?name=${searchValue}`);
    navigate(`/products?name=${searchValue}`);
  };

  //const searchedData = useSearchedProducts(searchValue);

  //console.log("Esto es el array de lo buscado", searchedData);

  // useEffect(() => {
  //   setSearchedProducts(searchedData);
  // }, [searchedData]);

  //console.log("Productos buscados actualizados", searchedProducts);

  return (
    <div className="Navbar flex flex-wrap justify-center items-center pt-4 gap-[20px] sticky top-0 z-10 bg-white">
      <Link to="/">
        <img src="/iconretroshop.svg" alt="" className="h-[53px]" />
      </Link>
      <div className="SearchBar relative flex items-center">
        <form onSubmit={handleSubmit}>
          <input
            className="w-[278px] h-[33px] bg-[#efefef] rounded-full p-[20px] "
            type="search"
            placeholder="Busca un producto..."
            value={searchValue}
            onChange={handleInputChange}
          />
          <button className="flex absolute justify-center items-center right-[5px] top-[5px] w-[28px] h-[28px] bg-white rounded-full">
            <SearchIcon className=" fill-[#FD2A5C] " />
          </button>
        </form>
      </div>
      <div className="overflow-x-scroll overflow-hidden no-scrollbar border-y-2 border-[#7C7C7C] mt-0 w-full">
        <div className="flex w-auto">
          <Link to="/products?category=Consola">
            <p className="mx-3 text-[#080C89] font-semibold">Consolas</p>
          </Link>

          <Link to="/products?category=Videojuego">
            <p className="mx-3 text-[#080C89] font-semibold">Videojuegos</p>
          </Link>
          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Radios
          </a>
          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Televisores
          </a>
          <Link to="/products?category=Ordenador">
            <p className="mx-3 text-[#080C89] font-semibold">Ordenadores</p>
          </Link>
          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Móviles
          </a>
        </div>
      </div>
    </div>
  );
};
