import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../serviceProviders/contexts/UserContext";
import axios from "axios";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";
import { CardContainer } from "../cards/CardContainer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const StaffPatientCount = () => {
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { user } = useContext(UserContext);
	const { id } = user;

	const fetchTotal = useCallback(() => {
		setLoading(true);
		setError(null);

		axios
			.get(`${BACKEND_API_URL}encounters/staff/${id}/count`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				setTotal(res.data.count);
                console.log(res)
			})
			.catch((err) => {
				setError(err.message);
                console.log(err)
			})
			.finally(() => setLoading(false));
	}, [id]);

	useEffect(() => fetchTotal(), [fetchTotal]);

	if (loading) return <div>Loading...</div>;

	if (error)
		return (
			<div>
				{error} <br />
				<button onClick={fetchTotal}>Retry</button>
			</div>
		);

	return (
		<CardContainer className="bg-gradient-to-br from-green-900 to-green-500 flex-1">
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<span className="text-white text-sm">Your Encounters</span>
					<span className="text-white text-5xl font-bold">{total}</span>
				</div>
			</div>
            <Link to="/admissions/add" className="text-white hover:text-white text-xs">
                New encounter
                <FontAwesomeIcon icon={faPlus} className="ml-2" />
            </Link>
		</CardContainer>
	);
};
