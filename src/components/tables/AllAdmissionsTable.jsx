import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const AllAdmissionsTable = ({ admissions }) => {
	return (
		<table className="w-full mt-4">
			<thead>
				<tr className="text-left">
					<th className="p-2">Id</th>
					<th className="p-2">Patient</th>
					<th className="p-2">Date</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{admissions.length > 0 ? (
					admissions.map((admissions) => (
						<tr
							key={admissions.admissions.id}
							className="border-b border-gray-200 hover:bg-slate-100">
							<td className="p-2">{admissions.id}</td>
							<td className="p-2">{admissions.patient.lastName}, {admissions.patient.firstName}</td>
							<td className="p-2">{admissions.createdAt}</td>
							<td className="p-2">
								<Link
									to={`/app/admissions/${admissions.id}`}
									className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
									View
								</Link>

								<Link
									to={`/app/admissions/${admissions.id}/edit`}
									className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
									Edit
								</Link>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td className="p-2">No admissions found</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

AllAdmissionsTable.propTypes = {
	admissions: PropTypes.array.isRequired,
};
