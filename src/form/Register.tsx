import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axiosClient";
import logo from "../assets/sarusara-logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNo: "",
    role: "Customer",
  });

  const navigate = useNavigate();

  const handleRegister = async (e:any) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/user/register", formData, {
        withCredentials: true,
      });

      toast.success("Registration successful!");
      navigate("/login");
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("Registration failed...");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-end
                 bg-[url('./assets/paddy.jpg')] bg-cover bg-center bg-fixed"
    >
      <div
        className="flex min-h-full flex-col justify-center px-8 py-12 lg:px-8 mr-[200px] 
                      text-green-900 bg-white/10 shadow-lg rounded-xl backdrop-blur-sm pl-10"
      >
        {/* Logo */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Sarusara agro"
            src={logo}
            className="mx-auto h-20 w-auto rounded-[50%]"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-900">
            Create your account
          </h2>
        </div>

        {/* Form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} method="POST" className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white 
                           outline-1 outline-white/10 placeholder:text-gray-500 
                           focus:outline-2 focus:outline-green-900"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white 
                           outline-1 outline-white/10 placeholder:text-gray-500 
                           focus:outline-2 focus:outline-green-900"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                required
                className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white 
                           outline-1 outline-white/10 placeholder:text-gray-500 
                           focus:outline-2 focus:outline-green-900"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white 
                           outline-1 outline-white/10 placeholder:text-gray-500
                           focus:outline-2 focus:outline-green-900"
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white 
                           outline-1 outline-white/10 placeholder:text-gray-500
                           focus:outline-2 focus:outline-green-900"
                onChange={(e) =>
                  setFormData({ ...formData, phoneNo: e.target.value })
                }
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium">Select Role</label>
              <select
                className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white 
                           outline-1 outline-white/10 focus:outline-2 focus:outline-green-900"
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="Customer">Customer</option>
                <option value="Farmer">Farmer</option>
                <option value="Wholesaler">Wholesaler</option>
              </select>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 
                           text-sm font-semibold text-white hover:bg-green-800"
              >
                Register
              </button>
            </div>
          </form>

          {/* Link to login */}
          <p className="mt-10 text-center text-sm text-gray-800">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-white hover:text-indigo-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
