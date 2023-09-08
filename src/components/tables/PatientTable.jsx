import PropTyped from "prop-types";
import { Link } from "react-router-dom";

export const PatientTable = ({ patients }) => {
	return (
		<table className="w-full">
			<thead>
				<tr className="text-left">
					<th className="p-2">Id</th>
					<th className="p-2">Name</th>
					<th className="p-2">Sex</th>
					<th className="p-2">Age</th>
					<th className="p-2">Occupation</th>
					<th className="p-2">Location</th>
					<th className="p-2">Action</th>
				</tr>
			</thead>
			<tbody>
				{patients.map((patient) => (
					<tr
						key={patient.id}
						className="border-b border-gray-200 hover:bg-slate-100">
						<td className="p-2">{patient.id}</td>
						<td className="p-2">
							{patient.lastName}, {patient.firstName}
						</td>
						<td className="p-2">{patient.sex}</td>
						<td className="p-2">{patient.age}</td>
						<td className="p-2">{patient.occupation}</td>

						<td className="p-2">
							{patient.city}, {patient.region}
						</td>
						<td className="p-2">
							<Link
								to={`/app/patients/${patient.id}`}
								className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
								View
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

PatientTable.propTypes = {
	patients: PropTyped.array.isRequired,
};
