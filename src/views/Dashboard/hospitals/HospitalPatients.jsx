import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../../utils/constants";
import { useParams } from "react-router-dom";
import { getToken } from "../../../utils/helpers";
import { CardContainer } from "../../../components/cards/CardContainer";
import { CardHeader } from "../../../components/cards/CardHeader";
import { PatientTable } from "../../../components/tables/PatientTable";

export const HospitalPatients = () => {
	const [loading, setLoading] = useState(true);
	const [patients, setPatients] = useState([]);
	const [error, setError] = useState(null);
	const { id } = useParams();
	const [data, setData] = useState([]);

	// console.log('this',id)
	const fetchPatients = useCallback(
		(route) => {
			setError(null);
			setLoading(true);
			axios
				.get(
					`${BACKEND_API_URL}patients/hospital/${id}${
						route ? `?page=${route}` : ""
					}`,
					{
						headers: {
							Authorization: `Bearer ${getToken()}`,
							Accept: "application/json",
						},
					}
				)
				.then((res) => {
					console.log(res.data);
					setPatients(res.data.data);
					setData(res.data);
				})
				.catch((err) => {
					console.log(err);
					setError(err.response.message);
				})
				.finally(() => setLoading(false));
		},
		[id]
	);

	useEffect(() => {
		fetchPatients();
	}, [fetchPatients]);

	if (loading) return <div>loading...</div>;
	if (error) return <div>Error fetching data</div>;

	return (
		<>
			<CardContainer className={"mt-5"}>
				<CardHeader title={"Patients"} />

				<PatientTable patients={patients} />
				{/* page meta */}
				<div className="flex justify-between my-6">
					<div>
						<span className="mr-2">
							Showing {data.meta?.from} to {data.meta?.to} of{" "}
							{data.meta?.total} entries
						</span>
					</div>
				</div>

				<div className="flex  mt-4 text-xs">
					{data.meta?.links?.map((link) => (
						<button
							key={link.label}
							disabled={link.active}
							className={`${
								link.active && "ring-4 ring-primary-600/40"
							} bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2`}
							onClick={() =>
								fetchPatients(link.url.split("/").pop())
							}>
							{link.label}
						</button>
					))}
				</div>
			</CardContainer>
		</>
	);
};
