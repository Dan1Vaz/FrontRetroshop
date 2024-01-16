export const Navbar = () => {
  return (
    <div className="Navbar flex flex-row justify-center pt-4 gap-[20px]">
      <img src="/iconretroshop.svg" alt="" className="w-[35px] h-[53px]" />
      <input
        className="w-[278px] h-[33] bg-[#efefef] rounded-full p-[20px] "
        type="search"
        placeholder="Busca un producto"
      />
    </div>
  );
};
