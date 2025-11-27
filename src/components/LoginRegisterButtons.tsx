
import { Link } from 'react-router-dom'

const LoginRegisterButtons = () => {
  return (
    <>
    <button color="inherit"><Link to="/login">Login</Link></button>
    <button color="inherit"><Link to="/register">Register</Link></button>
    </>
  )
}

export default LoginRegisterButtons