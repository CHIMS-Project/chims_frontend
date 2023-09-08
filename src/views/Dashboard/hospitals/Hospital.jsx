import { Outlet, useParams } from "react-router-dom";
import { CardContainer } from "../../../components/cards/CardContainer";
import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../../utils/constants";
import { getToken } from "../../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

export const Hospital = () => {
	const { id } = useParams();
	const [hospital, setHospital] = useState(null);
    const [departments, setDepartments] = useState(null);
    const [staff, setStaff] = useState(null);
    const [patients, setPatients] = useState(null);
    const [loading, setLoading] = useState(true);

	const fetchHospital = useCallback(() => {
        setLoading(true);
		axios
			.get(`${BACKEND_API_URL}hospitals/${id}`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				console.log(res.data);
				setHospital(res.data);
                setDepartments(res.data.departments)
                setPatients(res.data.patients)
                setStaff(res.data.staff)
                setPatients(res.data.patients)
			})
			.catch((err) => {
				console.log(err);
			})
            .finally(() => {
                setLoading(false)
            })
	}, [id]);

	useEffect(() => {
		fetchHospital();
	}, [fetchHospital]);

    if (loading) return (
        <div>loading...</div>
    )
	return (
		<div>
			<CardContainer className={"w-full"}>
				<h1 className="text-4xl font-bold text-primary-700 mb-4">
					{hospital?.name}
				</h1>

				<div className="flex flex-row mt-3 gap-2">
					<div className="flex items-center px-4 py-1 bg-slate-100 rounded-full">
						<span>
							<FontAwesomeIcon icon={faLocation} />
						</span>
						<p className="text-sm text-gray-500 ml-2">
							{hospital?.city}, {hospital?.region}{" "}
						</p>
					</div>
				</div>
			</CardContainer>

            <Outlet context={{departments, staff, patients}} />
		</div>
	);
};
