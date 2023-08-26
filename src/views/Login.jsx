import LoginImg from '../assets/images/login-img.jpg'
import { LoginForm } from '../components/form/Login/LoginForm'

export const Login = () => {
  return (
    <div className="h-screen flex w-full">
        <div className="flex-1 h-full bg-primary-500" >
            <img src={LoginImg} alt="login" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 h-full grid place-items-center" >
            <LoginForm />
        </div>
    </div>
  )
}
