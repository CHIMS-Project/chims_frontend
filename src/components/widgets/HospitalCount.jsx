import { CardContainer } from "../cards/CardContainer";
import { faAdd, faHospital } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CardHeader } from "../cards/CardHeader";
import { CardBody } from "../cards/CardBody";
import { SmallCardDetail } from "../cards/SmallCardDetail";
import { SecondaryBtnLink } from "../buttons/SecondaryBtnLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HospitalCount = () => {
	return (
		<>
			<CardContainer>
				<CardHeader title="Registered Hospitals" />
				<CardBody>
					<Link
						to="staff/doctors"
						className="hover:no-underline hover:bg-slate-100 rounded-md">
						<SmallCardDetail
							figure={6}
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
