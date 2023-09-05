import { UserContext } from "../contexts/UserContext";
import PropTypes from 'prop-types';
import { useState } from "react";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        firstName: "Micheal",
        lastName: "Oluwadamilare",
        email: "mich@chims.com",
        role: "super-admin",
        hospital: {
            id: 6,
            name: "Chims Hospital",
        },



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
