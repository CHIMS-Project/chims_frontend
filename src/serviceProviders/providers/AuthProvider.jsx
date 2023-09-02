import { AuthContext } from "../contexts/AuthContext"
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const login = (credentials) => {
        // perform login logic

        console.log(credentials)
        setIsLoggedIn(true)
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, login }} >
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
