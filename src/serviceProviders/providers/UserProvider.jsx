import { UserContext } from "../contexts/UserContext";
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from "react";
import { getToken, isTokenSaved } from "../../utils/helpers";
import { BACKEND_API_URL } from "../../utils/constants";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const fetchUser = useCallback(async (token) => {
        const response = await fetch(`${BACKEND_API_URL}auth/`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',

            }
        })

        const data = await response.json()

        if (response.ok) {
            setUser(data.user)
            console.log(data.user)
        } else {
            setUser(null)
        }

    }, [])
    useEffect(() => {
        if(isTokenSaved() && user === null) {
            const token = getToken()
            fetchUser(token)
        }
    })
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}
