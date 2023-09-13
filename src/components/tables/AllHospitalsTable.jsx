import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const AllHospitalsTable = ({ hospitals }) => {
	return (
		<table className="w-full mt-4">
			<thead>
				<tr className="text-left">
					<th className="p-2">Hospital Name</th>
					<th className="p-2">Hospital ID</th>
					<th className="p-2">Hospital City</th>
					<th className="p-2">Hospital Region</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{hospitals.length > 0 ? (
					hospitals.map((hospital) => (
						<tr
							key={hospital.id}
							className="border-b border-gray-200 hover:bg-slate-100">
							<td className="p-2">{hospital.name}</td>
							<td className="p-2">{hospital.id}</td>
							<td className="p-2">{hospital.city}</td>
							<td className="p-2">{hospital.region}</td>
							<td className="p-2">
								<Link
									to={`/app/hospitals/${hospital.id}`}
									className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
									View
								</Link>

								<Link
									to={`/app/hospitals/${hospital.id}/edit`}
									className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
									Edit
								</Link>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td className="p-2">No hospitals found</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

AllHospitalsTable.propTypes = {
	hospitals: PropTypes.array.isRequired,
};
