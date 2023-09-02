import { CardContainer } from "../cards/CardContainer";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CardHeader } from "../cards/CardHeader";
import { CardBody } from "../cards/CardBody";
import { SmallCardDetail } from "../cards/SmallCardDetail";

export const HospitalCount = () => {
	return (
		<Link
			to={"hospitals"}
			className="hover:no-underline hover:ring hover:ring-primary-400 rounded-lg transition">
			<CardContainer>
				<CardHeader title="Registered Hospitals" />
				<CardBody>
					<SmallCardDetail figure={6} detailTitle="Hospitals" icon={faHospital} />
				</CardBody>
			</CardContainer>
		</Link>
	);
};
