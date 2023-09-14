import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const AllEncountersTable = ({ encounters }) => {
	return (
		<table className="w-full mt-4">
			<thead>
				<tr className="text-left">
					<th className="p-2">Id</th>
					<th className="p-2">Admission</th>
					<th className="p-2">Patient</th>
					<th className="p-2">Date</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{encounters.length > 0 ? (
					encounters.map((encounter) => (
						<tr
							key={encounter.admissions.id}
							className="border-b border-gray-200 hover:bg-slate-100">
							<td className="p-2">{encounter.id}</td>
							<td className="p-2">{encounter.admission.id}</td>
							<td className="p-2">{encounter.patient.lastName}, {encounter.patient.firstName}</td>
							<td className="p-2">{encounter.createdAt}</td>
							<td className="p-2">
								<Link
									to={`/app/encounters/${encounter.id}`}
									className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
									View
								</Link>

								<Link
									to={`/app/encounters/${encounter.id}/edit`}
									className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
									Edit
								</Link>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td className="p-2">No encounters found</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

AllEncountersTable.propTypes = {
	encounters: PropTypes.array.isRequired,
};
