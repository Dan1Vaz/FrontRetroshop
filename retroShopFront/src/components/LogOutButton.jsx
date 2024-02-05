import { Link } from "react-router-dom";

export const LogOutButton = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <Link to="/">
      <button
        className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full focus:border-[#FE7193]"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </Link>
  );
};
