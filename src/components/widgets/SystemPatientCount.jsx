import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { CardBody } from "../cards/CardBody";
import { CardContainer } from "../cards/CardContainer";
import { CardHeader } from "../cards/CardHeader";
import { SmallCardDetail } from "../cards/SmallCardDetail";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";

export const SystemPatientCount = () => {
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(0);

	const fetchCount = useCallback(() => {
		setLoading(true);
		axios
			.get(`${BACKEND_API_URL}patients/count`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			})
			.then((res) => {
				setCount(res.data.count);
				setLoading(false);
			})
			.catch(() => {
				// console.log(err);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		fetchCount();
	}, [fetchCount]);

	if (loading) return <div>Loading...</div>;

	return (
		<CardContainer className={'w-full'} >
				<CardHeader title={"Patients Total"} />
				<CardBody>
				<Link
					to={"patients"}
					className="hover:no-underline  hover:bg-slate-100 rounded-lg transition">
					<SmallCardDetail
						figure={count}
						detailTitle="Patients"
						icon={faUsers}
						/>
						</Link>
				</CardBody>
			</CardContainer>
	);
};
