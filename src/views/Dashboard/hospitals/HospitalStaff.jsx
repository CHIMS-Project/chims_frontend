import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../../utils/constants";
import { Link, useParams } from "react-router-dom";
import { getToken } from "../../../utils/helpers";
import { CardContainer } from "../../../components/cards/CardContainer";
import { CardHeader } from "../../../components/cards/CardHeader";

export const HospitalStaff = () => {
	const [loading, setLoading] = useState(true);
	const [staff, setStaff] = useState([]);
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
					`${BACKEND_API_URL}staff/hospital/${id}${
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
					setStaff(res.data.data);
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

				<table className="w-full">
					<thead>
						<tr className="text-left">
							<th className="p-2">Id</th>
							<th className="p-2">Name</th>
							<th className="p-2">Email</th>
							<th className="p-2">Contact</th>
							<th className="p-2">User Type</th>
							<th className="p-2">Action</th>
						</tr>
					</thead>
					<tbody>
						{staff.map((staff) => (
							<tr
								key={staff.id}
								className="border-b border-gray-200 hover:bg-slate-100">
								<td className="p-2">{staff.id}</td>
								<td className="p-2">
									{staff.lastName}, {staff.firstName}
								</td>
								<td className="p-2">{staff.email}</td>
								<td className="p-2">{staff.phoneNumber}</td>
								<td className="p-2">{staff.type.replace('-'," ")}</td>
								<td className="p-2">
									<Link
										to={`/app/staff/${staff.id}`}
										className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
										View
									</Link>
								</td>
							</tr>
						))}
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
