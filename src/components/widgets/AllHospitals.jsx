import { CardContainer } from "../cards/CardContainer";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";
import { SearchBar } from "../form/SearchBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const AllHospitals = ({ meta = false }) => {
	const [hospitals, setHospitals] = useState([]);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const fetchHospitals = useCallback((route = "hospitals") => {
		setLoading(true);
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
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		fetchHospitals();
	}, [fetchHospitals]);

	if (loading)
		return (
			<CardContainer className="w-full h-96 animate-pulse mt-5">
				<div className="flex flex-col gap-4"></div>
			</CardContainer>
		);
	return (
		<CardContainer className="w-full mt-5">
			<SearchBar />
			<table className="w-full mt-4">
				<thead>
					<tr className="text-left">
						<th className="p-2">Hospital Name</th>
						<th className="p-2">Hospital ID</th>
						<th className="p-2">Hospital City</th>
						<th className="p-2">Hospital Region</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{hospitals.length > 0 ? (
						hospitals.map((hospital) => (
							<tr
								key={hospital.id}
								className="border-b border-gray-200 hover:bg-slate-100">
								<td className="p-2">{hospital.name}</td>
								<td className="p-2">{hospital.id}</td>
								<td className="p-2">{hospital.city}</td>
								<td className="p-2">{hospital.region}</td>
								<td className="p-2">
									<Link to={`/app/hospitals/${hospital.id}`} className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
										View
									</Link>
									<button className="bg-primary-200 text-white px-4 py-2 rounded-md">
										Edit
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td className="p-2">No hospitals found</td>
						</tr>
					)}
				</tbody>
			</table>
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
					<div className="flex  mt-4">
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
