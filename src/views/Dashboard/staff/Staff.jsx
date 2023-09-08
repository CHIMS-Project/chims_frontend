import { useParams } from "react-router-dom";
import { CardContainer } from "../../../components/cards/CardContainer";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../../utils/constants";
import { getToken } from "../../../utils/helpers";
import imgPlaceholder from "../../../assets/images/Portrait_Placeholder.png";

export const Staff = () => {
	const { id } = useParams();
	const [staff, setStaff] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchStaff = useCallback(() => {
		setLoading(true);
		setError(false);
		axios
			.get(`${BACKEND_API_URL}staff/${id}`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				setStaff(res.data.data);
				console.log(res.data.data);
			})
			.catch((err) => {
				setError(true);
				console.log(err);
			})
			.finally(() => setLoading(false));
	}, [id]);

	useEffect(() => {
		fetchStaff();
	}, [fetchStaff]);

	if (loading) return <div>Loading...</div>;

	if (error)
		return (
			<div>
				Something went wrong
				<button onClick={fetchStaff}>Retry</button>
			</div>
		);


	return (
		<>
			<div className="flex gap-10">
				<CardContainer
					className={"flex flex-col items-center gap-2 text-center"}>
					<div className=" w-36 h-36 bg-slate-400 rounded-full overflow-hidden">
                        <img
                            src={staff.image || imgPlaceholder}
                            alt="Staff"
                            className="w-full h-full object-cover"
                        />
                    </div>


					<div className="font-bold">ID: {staff.id}</div>
					<div className="text-slate-400">{staff.email}</div>
                    <button className="bg-primary-400 hover:bg-primary-500 w-full text-white px-4 py-2 rounded-md">Edit</button>
					<small className="text-xs font-light text-slate-300">

					</small>
				</CardContainer>

				<CardContainer className={"w-full max-w-2xl px-4"}>
                    <div className="flex items-center justify-between w-full py-5 border-b">
                        <div>
                            <h2 className="text-xl font-bold">Staff Details</h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-5">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="font-bold">First Name</div>
                                <div>{staff.firstName}</div>
                            </div>
                            <div className="w-1/2">
                                <div className="font-bold">Last Name</div>
                                <div>{staff.lastName}</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="font-bold">Email</div>
                                <div>{staff.email}</div>
                            </div>
                            <div className="w-1/2">
                                <div className="font-bold">Phone</div>
                                <div>{staff.phoneNumber}</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="font-bold">Type</div>
                                <div>{staff.type?.replace('-',' ')}</div>
                            </div>
                            <div className="w-1/2">
                                <div className="font-bold">Department</div>
                                <div>{staff.department?.name} Department</div>
                            </div>
                         </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="font-bold">Hospital</div>
                                <div>{staff.hospital?.name}</div>
                            </div>
                         </div>
                    </div>                                   
				</CardContainer>
			</div>
		</>
	);
};
