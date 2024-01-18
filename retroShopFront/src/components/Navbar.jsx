import SearchIcon from "@mui/icons-material/Search";

export const Navbar = () => {
  return (
    <div className="Navbar flex flex-row justify-center items-center pt-4 gap-[20px] relative">
      <img src="/iconretroshop.svg" alt="" className=" h-[53px]" />
      <div className="SearchBar relative flex items-center"> 
        <input
          className="w-[278px] h-[33px] bg-[#efefef] rounded-full p-[20px] "
          type="search"
          placeholder="Busca un producto..."
        />
        <div className="flex absolute justify-center items-center right-[5px] top-[5px] w-[28px] h-[28px] bg-white rounded-full">
          <SearchIcon className=" fill-[#FD2A5C] " />
        </div>
      </div>
    </div>
  );
};
