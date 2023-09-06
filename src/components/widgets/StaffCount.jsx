import { CardContainer } from "../cards/CardContainer";
import { CardHeader } from "../cards/CardHeader";
import {
	faUserDoctor,
	faUserNurse,
	faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { CardBody } from "../cards/CardBody";
import { Link } from "react-router-dom";
import { SmallCardDetail } from "../cards/SmallCardDetail";
import { SecondaryBtnLink } from "../buttons/SecondaryBtnLink";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";

export const StaffCount = () => {
	const [loading, setLoading] = useState(true);
	const [staffCount, setStaffCount] = useState(null);

	const fetchCount = useCallback(() => {
		setLoading(true);
		axios
			.get(`${BACKEND_API_URL}staff/count`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				// console.log(res.data)
				setStaffCount(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		fetchCount();
	}, [fetchCount]);

	if (loading) return <div>Loading...</div>;
	return (
		<>
			<CardContainer>
				<CardHeader title="Total Registered Staff" />
				<CardBody>
					<Link
						to="staff/doctors"
						className="hover:no-underline hover:bg-slate-100 rounded-md">
						<SmallCardDetail
							figure={staffCount?.doctor}
							detailTitle="Doctors"
							icon={faUserDoctor}
						/>
					</Link>

					<Link
						to="staff/nurses"
						className="hover:no-underline hover:bg-slate-100 rounded-md">
						<SmallCardDetail
							figure={staffCount?.nurse}
							detailTitle="Nurses"
							icon={faUserNurse}
						/>
					</Link>

					<Link
						to="staff/admins"
						className="hover:no-underline hover:bg-slate-100 rounded-md">
						<SmallCardDetail
							figure={
								staffCount?.hospital_admin + staffCount?.department_admin
							}
							detailTitle="Admins"
							icon={faUserShield}
						/>
					</Link>
				</CardBody>
				<SecondaryBtnLink to="staff">View All</SecondaryBtnLink>
			</CardContainer>
		</>
	);
};
