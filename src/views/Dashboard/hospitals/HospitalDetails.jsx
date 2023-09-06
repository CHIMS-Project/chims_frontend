import { Link, useOutletContext } from "react-router-dom";
import { CardContainer } from "../../../components/cards/CardContainer";
import { CardHeader } from "../../../components/cards/CardHeader";

export const HospitalDetails = () => {
	const { departments, staff, patients } = useOutletContext();

	return (
		<div className="flex gap-10 mt-5">
			<CardContainer className={"flex-1 p-2"}>
				<CardHeader title={"Departments"} />
				<table className="w-full">
					<thead>
						<tr className="text-left">
							<th className="p-2">Id</th>
							<th className="p-2">Name</th>
						</tr>
					</thead>
					<tbody>
						{departments?.map((department) => (
							<tr
								key={department.id}
								className="border-b border-gray-200 hover:bg-slate-100">
								<td className="p-2">{department.id}</td>
								<td className="p-2">{department.name}</td>
							</tr>
						))}
					</tbody>
				</table>
				<p className="mt-10 text-slate-300 font-bold text-xs">
					{departments.length}{" "}
					{departments.length === 1 ? "department" : "departments"}
				</p>
			</CardContainer>
			<CardContainer className={"flex-1"}>
				<CardHeader title={"Staff"} />
				{staff?.length === 0 ? (
					<p className="mt-3">No registered staff</p>
				) : (
                    <>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left">
                                    <th className="p-2">Id</th>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staff?.map((staff, index) => {
                                    if (index === 9) return
                                    return (
                                    <tr
                                        key={staff.id}
                                        className="border-b border-gray-200 hover:bg-slate-100">
                                        <td className="p-2">{staff.id}</td>
                                        <td className="p-2">
                                            {staff.last_name}, {staff.first_name}
                                        </td>
                                        <td className="p-2">{staff.type}</td>
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                        <Link className="hover:no-underline hover:text-white text-white bg-primary-500 hover:bg-primary-600 px-5 py-1 rounded-md inline-block mt-3" to={'staff'}>View all</Link>
                    </>
				)}
				<p className="mt-10 text-slate-300 font-bold text-xs">
					{staff.length} staff
				</p>
			</CardContainer>
			<CardContainer className={"flex-1"}>
				<CardHeader title={"Patients"} />
				{patients?.length === 0 ? (
					<p className="mt-3">No registered patients</p>
				) : (
                    <>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left">
                                    <th className="p-2">Id</th>
                                    <th className="p-2">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients?.map((patients) => (
                                    <tr
                                        key={patients.id}
                                        className="border-b border-gray-200 hover:bg-slate-100">
                                        <td className="p-2">{patients.id}</td>
                                        <td className="p-2">
                                            {patients.last_name},{" "}
                                            {patients.first_name}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link className="hover:no-underline hover:text-white text-white bg-primary-500 hover:bg-primary-600 px-5 py-1 rounded-md inline-block mt-3" to={'patients'}>View all</Link>
                    </>
				)}
				<p className="mt-10 text-slate-300 font-bold text-xs">
					{patients.length}{" "}
					{patients.length === 1 ? "patients" : "patient"}

				</p>
			</CardContainer>
		</div>
	);
};
