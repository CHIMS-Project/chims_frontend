import { CardContainer } from "../cards/CardContainer";
import { faAdd, faHospital } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CardHeader } from "../cards/CardHeader";
import { CardBody } from "../cards/CardBody";
import { SmallCardDetail } from "../cards/SmallCardDetail";
import { SecondaryBtnLink } from "../buttons/SecondaryBtnLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";

export const HospitalCount = () => {
	const [loading, setLoading] = useState(true)
	const [count, setCount] = useState(0);

	const fetchCount = useCallback( () => {
		axios
			.get(`${BACKEND_API_URL}hospitals/count`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			})
			.then((res) => {
				setCount(res.data.count);
				setLoading(false)
			})
			.catch((err) => {
				console.log(err);
				setLoading(false)
			});
	
	}, []);

	useEffect(() => {
		fetchCount();
	}, [fetchCount]);
	
	if (loading) return (<div>Loading...</div>)
	return (
		<>
			<CardContainer className={'w-full'}>
				<CardHeader title="Registered Hospitals" />
				<CardBody>
					<Link
						to="hospitals"
						className="hover:no-underline hover:bg-slate-100 rounded-md">
						<SmallCardDetail
							figure={count}
							detailTitle="Hospitals"
							icon={faHospital}
						/>
					</Link>
				</CardBody>
				<SecondaryBtnLink to="hospitals/add">
					<span className="mr-2">Add</span>
					<FontAwesomeIcon icon={faAdd} />
				</SecondaryBtnLink>
			</CardContainer>
		</>
	);
};
