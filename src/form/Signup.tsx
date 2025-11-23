import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    phoneNo:"",
    role: "",
  })


  function handleChange(e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) {

  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name as string]: value
  });
}


  const handleSubmit = async() =>{
    try{
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
        formData
      )

      console.log(res.data);
      setFormData({
        name:"",
        email:"",
        password:"",
        address:"",
        phoneNo:"",
        role: "",
      })

  toast.success("User registered successfully");
  navigate("/login");
      
    }catch(err){
      console.log(err);
      toast.error("User cannot be registered " + err);
    }
  }

  return (
    <div
  className="min-h-screen w-full flex items-center justify-end
                 bg-[url('./assets/paddy.jpg')] bg-cover bg-center bg-fixed"
>
 

    </div>

  )
}

export default Signup