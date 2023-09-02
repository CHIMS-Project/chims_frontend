import { useRole } from "../../../hooks/useRole";
import { SuperAdminOverview } from "./SuperAdminOverview";

export const Overview = () => {
	const userType = useRole();

	switch (userType) {
		case "super-admin":
			return <SuperAdminOverview />;
		default:
			return null;
	}
};
