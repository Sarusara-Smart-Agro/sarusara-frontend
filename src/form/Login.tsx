import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axiosClient";
import logo from "../assets/sarusara-logo.png";

const Login = () => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  let handleLogin = async () => {
    try {

      const res = await api.post("/api/user/login",{
        username,
        password
      },{ withCredentials: true } )

      navigate("/")
      
      console.log(res);

      toast.success("Login successful...");
    } catch (err) {
      console.log(err);
      toast.error("Login failed...");
    }
  };
  return (
    <div
      className="min-h-screen w-full flex items-center justify-end
                 bg-[url('./assets/paddy.jpg')] bg-cover bg-center bg-fixed"
    >
      <div className="flex min-h-full flex-col justify-center px-8 py-12 lg:px-8 mr-[200px] text-green-900 bg-white/10 shadow-lg rounded-xl backdrop-blur-sm pl-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Sarusara agro"
            src={logo}
            className="mx-auto h-20 w-auto rounded-[50%]"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md bg-white/5 px-3 py-1 text-emerald-900 
                           outline-1 outline-white/10 placeholder:text-gray-500
                           focus:outline-2 focus:outline-green-900 border-1 border-green-700"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-grey-400 hover:text-green-700"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md bg-white/5 px-3 py-1 text-emerald-900 
                           outline-1 outline-white/10 placeholder:text-gray-500
                           focus:outline-2 focus:outline-green-900 border-1 border-green-700"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-green-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-800">
            If don't you have an account please{" "}
            <Link
              to="/register"
              className="font-semibold text-white hover:text-indigo-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login
