import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  console.log(searchValue);

  return (
    <div className="Navbar flex flex-wrap justify-center items-center pt-4 gap-[20px] sticky top-0 z-10 bg-white">
      <img src="/iconretroshop.svg" alt="" className="h-[53px]" />
      <div className="SearchBar relative flex items-center">
        <input
          className="w-[278px] h-[33px] bg-[#efefef] rounded-full p-[20px] "
          type="search"
          placeholder="Busca un producto..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <div className="flex absolute justify-center items-center right-[5px] top-[5px] w-[28px] h-[28px] bg-white rounded-full">
          <SearchIcon className=" fill-[#FD2A5C] " />
        </div>
      </div>
      <div className="overflow-x-scroll overflow-hidden no-scrollbar border-y-2 border-[#7C7C7C] mt-0 w-full">
        <div className="flex w-auto">
          <Link to="/">
            <p className="mx-3 text-[#080C89] font-semibold">Consolas</p>
          </Link>

          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Videojuegos
          </a>
          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Radios
          </a>
          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Televisores
          </a>
          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Ordenadores
          </a>
          <a href="" className="mx-3 text-[#080C89] font-semibold">
            Móviles
          </a>
        </div>
      </div>
    </div>
  );
};
