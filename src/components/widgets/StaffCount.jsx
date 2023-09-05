import { CardContainer } from "../cards/CardContainer";
import { CardHeader } from "../cards/CardHeader";
import { faUserDoctor, faUserNurse, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { CardBody } from "../cards/CardBody";
import { Link } from "react-router-dom";
import { SmallCardDetail } from "../cards/SmallCardDetail";
import { SecondaryBtnLink } from "../buttons/SecondaryBtnLink";

export const StaffCount = () => {
	return (
		<>
			<CardContainer >
				<CardHeader title="Total Registered Staff" />
				<CardBody>
                    <Link to="staff/doctors" className="hover:no-underline hover:bg-slate-100 rounded-md" >
                        <SmallCardDetail figure={201} detailTitle="Doctors" icon={faUserDoctor} />
					</Link>

                    <Link to="staff/nurses" className="hover:no-underline hover:bg-slate-100 rounded-md" >
                        <SmallCardDetail figure={256} detailTitle="Nurses" icon={faUserNurse} />
					</Link>

                    <Link to="staff/admins" className="hover:no-underline hover:bg-slate-100 rounded-md" >
                        <SmallCardDetail figure={21} detailTitle="Admins" icon={faUserShield} />
					</Link>
				</CardBody>
                <SecondaryBtnLink to="patients" >
                    View All
                </SecondaryBtnLink>
			</CardContainer>
		</>
	);
};
