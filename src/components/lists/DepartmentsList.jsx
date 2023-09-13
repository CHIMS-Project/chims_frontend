import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";
import PropTypes from "prop-types";

export const DepartmentsList = ({ id }) => {
	const [departments, setDepartments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchDepartments = useCallback(async () => {
		setLoading(true);
		axios
			.get(`${BACKEND_API_URL}hospitals/${id}/departments`, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				setDepartments(res.data.data);
			})
			.catch((err) => {
				setError(err);
                console.log(err)
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

    useEffect(() => {
        fetchDepartments()
    }, [fetchDepartments])

	if (loading) return <div>Loading...</div>;

	if (error)
		return (
			<div>
				Error: {error.message}
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={fetchDepartments}>
					Retry
				</button>
			</div>
		);
	return (
		<div className="p-2 w-full">
			{departments.length > 0 ? (
				departments.map((department) => (
					<div
						key={department.id}
						className="p-2 mb-5 border-b">
                            {department.name}
                        </div>
				))
			) : (
				<div>No departments found</div>
			)}

			<button  className="inline-block w-full rounded-lg p-2 bg-slate-100 hover:bg-slate-200">
                Add Department
                &nbsp;
            </button>
		</div>
	);
};

DepartmentsList.propTypes = {
	id: PropTypes.string.isRequired,
};
