import { AppConfigsContext } from "../contexts/AppConfigsContext"
import PropTypes from 'prop-types'
import { useState } from 'react'

export const AppConfigsProvider = ({ children }) => {
    const [sideNavOpen, setSideNavOpen] = useState(true)
    const [popUpMessage, setPopUpMessage] = useState(null)
    
    return (
        <AppConfigsContext.Provider value={{sideNavOpen, setSideNavOpen, popUpMessage, setPopUpMessage}} >
            {children}
        </AppConfigsContext.Provider>
    )
}

AppConfigsProvider.propTypes = {
    children: PropTypes.node.isRequired
}
