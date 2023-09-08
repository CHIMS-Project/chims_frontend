import { AuthContext } from "../contexts/AuthContext";
import { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken, isTokenSaved, removeToken, saveToken } from "../../utils/helpers";
import { UserContext } from "../contexts/UserContext";

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => isTokenSaved());
	const [verified, setVerified] = useState(false);
	const [authError, setAuthError] = useState(null);
    const { setUser } = useContext(UserContext);

	const fetchUser = useCallback(async (token) => {
		try {
			const res = await axios.get(`${BACKEND_API_URL}auth/`, {
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
				},
			});
			// console.log(res.data.user);
			setUser(res.data.user);
		} catch (err) {
			console.log(err);

			if(err.message === 'Network Error') {
				setAuthError('Network Error');
			}
			if (err.response.status === 401) {
				console.log("Unauthorized");
				setUser(null);
				setIsLoggedIn(false);
                removeToken();
			}
		}
	}, [setUser]);

	useEffect(() => {
		console.log(isTokenSaved(), isLoggedIn);
		if (isTokenSaved()) {
			const token = getToken();
			fetchUser(token);
		}
	}, [fetchUser, isLoggedIn]);

	const login = (credentials) => {
		// axios.post()
		// console.log(credentials);
		axios
			.post(`${BACKEND_API_URL}auth/login`, credentials)
			.then((response) => {
				// console.log(response);
				setIsLoggedIn(true);
                setAuthError(null);
                saveToken(response.data.token);
                setUser(response.data.user);
			})
			.catch((error) => {
				// console.log(error);
				setAuthError(error.response.data.message);
				setIsLoggedIn(false);
			});
	};

	/**
	 * Verify the id of the attempt
	 * @param {string} id Id of the attempt to verify
	 */
	const verifyId = async (id) => {
		setAuthError(null);
		try {
			const response = await axios.get(
				`${BACKEND_API_URL}auth/verify?id=${id}`
			);
			// console.log(response);
			setVerified(true);

			return response.data.user;
		} catch (error) {
			// console.log(error);
			setVerified(false);
			setAuthError(error.response.data.message);
		}
	};

    const logout = () => {
        axios.get(`${BACKEND_API_URL}auth/logout`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                Accept: 'application/json',
            }
        })
            .then((response) => {
                console.log(response);
                setIsLoggedIn(false);
                setAuthError(null);
                removeToken();
            }
            )
            .catch((error) => {
                console.log(error);
                setAuthError(error.response.data.message);
                setIsLoggedIn(true);
            })
    }

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				login,
				verifyId,
				verified,
				setVerified,
				authError,
                logout
			}}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
