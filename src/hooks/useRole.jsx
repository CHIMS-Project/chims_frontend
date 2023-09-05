import { useContext } from 'react'
import { UserContext } from '../serviceProviders/contexts/UserContext'

export const useRole = () => {
    const { user } = useContext(UserContext)
    
    return user.type
}