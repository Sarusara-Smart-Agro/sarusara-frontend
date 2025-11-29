import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axiosClient";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const { state } = useLocation();
  const email = state?.email;
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    try {
      await api.post(
        "/api/user/verify-otp",
        { email, otp },
        { withCredentials: true }
      );
      toast.success("Email Verified!");
      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      toast.error("Email cannot be verified...");
    }
  };

  const handleResend = async () => {
    try {
      await api.post(
        "/api/user/resend-otp",
        { email},
        { withCredentials: true }
      );
      toast.success("Resent otp");
      navigate("/login");
    } catch (err) {
      toast.error("Otp cannot be sent");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md border border-green-200">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-2">
          Verify Email
        </h2>

        <p className="text-center text-green-700 mb-6">
          OTP sent to: <span className="font-semibold">{email}</span>
        </p>

        {/* OTP INPUT */}
        <input
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-4 py-3 mb-5 rounded-lg border border-green-300 
                 focus:outline-none focus:ring-2 focus:ring-green-700 
                 text-green-900 placeholder-green-700/60"
        />

        {/* VERIFY BUTTON */}
        <button
          onClick={handleVerify}
          className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold
                 hover:bg-green-800 transition duration-200 shadow-md"
        >
          Verify
        </button>

        {/* RESEND BUTTON */}
        <button
          onClick={handleResend}
          className="w-full mt-4 bg-green-100 text-green-900 py-3 rounded-lg 
                 font-semibold hover:bg-green-200 transition duration-200
                 border border-green-300"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};
export default VerifyOtp;
