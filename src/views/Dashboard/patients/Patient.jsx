import { useParams } from "react-router-dom";
import { CardContainer } from "../../../components/cards/CardContainer";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../../utils/constants";
import { getToken } from "../../../utils/helpers";
import imgPlaceholder from "../../../assets/images/Portrait_Placeholder.png";

export const Patient = () => {
	const { id } = useParams();
	const [patient, setPatient] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchPatient = useCallback(() => {
		setLoading(true);
		setError(false);
		axios
			.get(`${BACKEND_API_URL}patients/${id}`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				setPatient(res.data.data);
				console.log(res.data.data);
			})
			.catch((err) => {
				setError(true);
				console.log(err);
			})
			.finally(() => setLoading(false));
	}, [id]);

	useEffect(() => {
		fetchPatient();
	}, [fetchPatient]);

	if (loading) return <div>Loading...</div>;

	if (error)
		return (
			<div>
				Something went wrong
				<button onClick={fetchPatient}>Retry</button>
			</div>
		);


	return (
		<>
			<div className="flex gap-10">
				<CardContainer
					className={"flex flex-col items-center gap-2 text-center"}>
					<div className=" w-36 h-36 bg-slate-400 rounded-full overflow-hidden">
                        <img
                            src={patient.image || imgPlaceholder}
                            alt="Patient"
                            className="w-full h-full object-cover"
                        />
                    </div>


					<div className="font-bold">ID: {patient.id}</div>
					<div className="font-bold">
						{patient.lastName} {patient.firstName}
					</div>
					<div className="text-slate-400">{patient.email}</div>
                    <div></div>
                    <button className="bg-primary-400 hover:bg-primary-500 w-full text-white px-4 py-2 rounded-md">Edit</button>
					<small className="text-xs font-light text-slate-300">
						Registered at {patient.hospital?.name} on{" "}
						{patient.dateOfAdmission}
					</small>
				</CardContainer>

				<CardContainer className={"w-full max-w-2xl px-4"}>
					<div className="flex items-center justify-between w-full py-5 border-b">
						<div>
							<span className="font-medium">Gender</span>
							<br /> {patient.sex}
						</div>
						<div>
							<span className="font-medium">Age</span>
							<br /> {patient.age}
						</div>
						<div>
							<span className="font-medium">Phone number</span>
							<br /> {patient.phone}
						</div>
					</div>
					<div className="flex items-center justify-between w-full py-5 border-b">
						<div>
							<span className="font-medium">House Number</span>
							<br /> {patient.houseNumber}
						</div>
						<div>
							<span className="font-medium">City</span>
							<br /> {patient.city}
						</div>
						<div>
							<span className="font-medium">Region</span>
							<br /> {patient.region}
						</div>
					</div>
					<div className="flex items-center justify-between w-full py-5">
						<div>
							<span className="font-medium">Marital Status</span>
							<br /> {patient.maritalStatus}
						</div>
						<div>
							<span className="font-medium">Occupation</span>
							<br /> {patient.occupation}
						</div>
						<div>
							<span className="font-medium">
								Emergency Contact
							</span>
							<br /> {patient.emergencyContactName}
						</div>
					</div>
				</CardContainer>
			</div>
		</>
	);
};
