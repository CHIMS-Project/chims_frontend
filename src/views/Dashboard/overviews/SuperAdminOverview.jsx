import { HospitalCount } from "../../../components/widgets/HospitalCount";
import { StaffCount } from "../../../components/widgets/StaffCount";
import { SystemPatientCount } from "../../../components/widgets/SystemPatientCount";

export const SuperAdminOverview = () => {
	return (
		<div className="p-10 w-full max-w-screen-2xl">
			<h1 className="text-3xl mb-4 font-bold text-primary-200" >Overview</h1>
			<div className="flex items-stretch gap-10">
                <HospitalCount />
                <StaffCount />
				<SystemPatientCount />
			</div>
		</div>
	);
};
