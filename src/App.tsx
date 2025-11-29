import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './form/Login'
import Signup from './form/Register'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard'
import VerifyOtp from './form/VerifyOtp'

function App() {

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
