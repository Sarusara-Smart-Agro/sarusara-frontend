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
    <div className="p-10">
      <h2>Verify Email</h2>
      <p>OTP sent to: {email}</p>

      <input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>

      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
};
export default VerifyOtp;
