import { Button} from '@mui/material'
import { Link } from 'react-router-dom'

const LoginRegisterButtons = () => {
  return (
    <>
    <Button color="inherit"><Link to="/login">Login</Link></Button>
    <Button color="inherit"><Link to="/register">Register</Link></Button>
    </>
  )
}

export default LoginRegisterButtons