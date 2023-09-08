import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const StaffTable = ({ staff }) => {
	return (
		<table className="w-full mt-4">
			<thead>
				<tr className="text-left">
					<th className="p-2">ID</th>
					<th className="p-2">First Name</th>
					<th className="p-2">Last Name</th>
					<th className="p-2">Email</th>
					<th className="p-2">Phone</th>
					<th className="p-2">Type</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{staff.length > 0 ? (
					staff.map((oneStaff) => (
						<tr
							key={oneStaff.id}
							className="border-b border-gray-200 hover:bg-slate-100">
							<td className="p-2">{oneStaff.id}</td>
							<td className="p-2">{oneStaff.firstName}</td>
							<td className="p-2">{oneStaff.lastName}</td>
							<td className="p-2">{oneStaff.email}</td>
							<td className="p-2">{oneStaff.phoneNumber}</td>
							<td className="p-2">{oneStaff.type.replace('-',' ')}</td>
							<td className="p-2">
								<Link
									to={`/app/staff/${oneStaff.id}`}
									className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2 hover:no-underline hover:text-white">
									View
								</Link>
								<button className="bg-primary-200 text-white px-4 py-2 rounded-md">
									Edit
								</button>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td className="p-2">No staff found</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

StaffTable.propTypes = {
	staff: PropTypes.array.isRequired,
};
