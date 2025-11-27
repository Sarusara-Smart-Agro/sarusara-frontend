import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosClient";
import LoginRegisterButtons from "../components/LoginRegisterButtons";
import logo from "../assets/sarusara-logo.png";
import toast from "react-hot-toast";

const Header = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogout = async (e: any) => {
    e.preventDefault();

    try {
      const res = api.post("/api/user/logout");
      setLoading(false)
      toast.success("Logout successfully...");
    } catch (Err) {}
  };

  useEffect(() => {
    const getUserDetails: any = async () => {
      try {
        const res = await api.get("/api/user/me");
        console.log(res.data.data.name);
        if (res.data?.data?.name) {
          setUser(res.data.data.name);
          setLoading(true)
        } else {
          setUser("");
        }
      } catch (err) {
        setUser("");
      }
    };

    getUserDetails();
  }, [loading]);

  return (
    <nav className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center bg-green-700 text-gray-200">
      {/* Left Logo or Menu */}
      <img src={logo} className="mr-6 font-bold h-[45px] rounded-[50%]" />

      {/* Title */}
      <h1 className="text-lg font-semibold flex-grow">Sarusara Agro</h1>

      {/* Center Links */}
      <div className="flex gap-6 flex-grow">
        <Link
          to="/products"
          className="px-3 py-2 rounded-md text-[16px] hover:bg-[#0F4F00] transition"
        >
          Products
        </Link>

        <Link
          to="/advertisement"
          className="px-3 py-2 rounded-md text-[16px] hover:bg-[#0F4F00] transition"
        >
          Advertisement
        </Link>
        <Link
          to="/advertisement"
          className="px-3 py-2 rounded-md text-[16px] hover:bg-[#0F4F00] transition"
        >
          Our Services
        </Link>
      </div>

      {/* Right Side User / Login Btns */}
      <div className="flex gap-4 items-center">
        {user === "" ? (
          <LoginRegisterButtons />
        ) : (
          <div>
            <span className="text-sm mr-10">{user}</span>
            <button
              className="bg-green-800 p-2 rounded-[20px] cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
