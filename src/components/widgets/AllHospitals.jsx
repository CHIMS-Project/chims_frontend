import { CardContainer } from "../cards/CardContainer";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";
import { SearchBar } from "../form/SearchBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AllHospitalsTable } from "../tables/AllHospitalsTable";

export const AllHospitals = ({ meta = false }) => {
	const [hospitals, setHospitals] = useState([]);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	const fetchHospitals = useCallback((route = "hospitals") => {
		setLoading(true);
		setError(null);
		// console.log(route)

		axios
			.get(`${BACKEND_API_URL}${route}`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				setData(res.data);
				setHospitals(res.data.data);
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		fetchHospitals();
	}, [fetchHospitals]);

	if(error) return (
		<CardContainer className="w-full h-96 mt-5">
			<div className="flex flex-col gap-4">
				<div className="text-red-500 text-center">{error}</div>
				<button onClick={() => fetchHospitals()} className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
					Retry
				</button>
			</div>
		</CardContainer>
	)

	if (loading)
		return (
			<CardContainer className="w-full h-96 animate-pulse mt-5">
				<div className="flex flex-col gap-4"></div>
			</CardContainer>
		);
	return (
		<CardContainer className="w-full mt-5">
			<SearchBar />
			<AllHospitalsTable hospitals={hospitals} />
			{/* page meta */}
			<div className="flex justify-between my-6">
				<div>
					<span className="mr-2">
						Showing {data.meta?.from} to {data.meta?.to} of{" "}
						{data.meta?.total} entries
					</span>
				</div>
			</div>

			{meta ? (
				<>
					{/*  pagination buttons */}
					<div className="flex  mt-4 text-xs">
						{data.meta?.links?.map((link) => (
							<button
								key={link.label}
								disabled={link.active}
								className={`${
									link.active && "ring-4 ring-primary-600/40"
								} bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2`}
								onClick={() =>
									fetchHospitals(link.url.split("/").pop())
								}>
								{link.label}
							</button>
						))}
					</div>
				</>
			) : (
				<Link
					to="hospitals"
					className="mt-4 bg-primary-500 hover:bg-primary-600 text-white hover:no-underline hover:text-white px-5 py-2 rounded-md inline-block">
					View all
				</Link>
			)}
		</CardContainer>
	);
};


AllHospitals.propTypes = {
	meta: PropTypes.bool,
};
