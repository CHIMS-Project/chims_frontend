import { AllStaffAdmissions } from "../../../components/widgets/AllStaffAdmissions";
import { AllStaffEncounters } from "../../../components/widgets/AllStaffEncounters";
import { StaffAdmissionsCount } from "../../../components/widgets/StaffAdmissionsCount";
import { StaffPatientCount } from "../../../components/widgets/StaffPatientCount";

export const NurseOverview = () => {
	return (
		<div className="p-10 w-full max-w-screen-2xl">
			<h1 className="text-3xl mb-4 font-bold text-primary-200">
				Overview
			</h1>

            <div className="flex items-stretch gap-10">
                <StaffAdmissionsCount  />
                <StaffPatientCount  />
            </div>
            <div className="flex items-stretch gap-10">
                <AllStaffAdmissions  />
                <AllStaffEncounters  />
            </div>
		</div>
	);
};
