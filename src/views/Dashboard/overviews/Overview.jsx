import { useRole } from "../../../hooks/useRole";
import { DoctorOverview } from "./DoctorOverview";
import { NurseOverview } from "./NurseOverview";
import { SuperAdminOverview } from "./SuperAdminOverview";

export const Overview = () => {
	const userType = useRole();

	switch (userType) {
		case "super-admin":
			return <SuperAdminOverview />;
		case "doctor":
			return <DoctorOverview />;
		case "nurse":
			return <NurseOverview />;
		default:
			return null;
	}
};
