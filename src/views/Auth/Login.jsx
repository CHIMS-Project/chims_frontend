import LoginImg from '../../assets/images/login-img.jpg'
import { LoginForm } from '../../components/form/Login/LoginForm'
import { useContext } from 'react'
import { AuthContext } from '../../serviceProviders/contexts/AuthContext'
import { Navigate } from 'react-router-dom'
export const Login = () => {
  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn) return <Navigate to="app" />
  return (
    <div className="h-screen flex w-full">
        <div className="flex-1 h-full bg-primary-500" >
            <img src={LoginImg} alt="login" className="w-full h-full object-cover opacity-70" />
        </div>
        <div className="flex-1 h-full grid place-items-center" >
            <LoginForm />
        </div>
    </div>
  )
}
