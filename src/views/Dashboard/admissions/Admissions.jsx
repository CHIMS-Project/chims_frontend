import { useContext } from "react"
import { UserContext } from "../../../serviceProviders/contexts/UserContext"

export const Admissions = () => {
    const { user } = useContext(UserContext)
    const { id } = user
    
  return (
    <div>Admissions</div>
  )
}
