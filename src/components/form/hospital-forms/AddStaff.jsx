import axios from "axios";
import { useContext, useState } from "react";
import { BACKEND_API_URL } from "../../../utils/constants";
import { getToken } from "../../../utils/helpers";
import { InputField } from "../input-fields/InputField";
import { Input } from "../form-elements/Input";
import { AppConfigsContext } from "../../../serviceProviders/contexts/AppConfigsContext";
import PropTypes from 'prop-types';

export const AddStaff = ({ hospital }) => {
	const hospitalId = hospital?.id;
	const departments = hospital?.departments;

	const [formData, setFormData] = useState({
		first_name: null,
		last_name: null,
		email: null,
		password: null,
		password_confirmation: null,
		type: null,
		hospital_id: hospitalId,
		department_id: null,
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
    const { setPopUpMessage } = useContext(AppConfigsContext)

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();

		setError(null);

		for (let key in formData) {
			if (formData[key] === null) return setError(`${key} is required`);
		}
		setLoading(true);

		axios
			.post(`${BACKEND_API_URL}staff`, formData, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then(() => {
                setPopUpMessage("Staff Added Successfully");
            })
			.catch((err) => {
				console.log(err);
				setError(err.response.data.message);
			})
			.finally(() => setLoading(false));
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <h4 className="text-xl font-bold mb-3">Add Staff</h4>
                {
                    error && <p className="text-red-500 mb-3">{error}</p>
                }
				<InputField>
					<Input
						type="text"
						id="first_name"
						label="First Name"
						onChange={handleChange}
					/>
				</InputField>

                <InputField>
					<Input
						type="text"
						id="last_name"
						label="Last Name"
						onChange={handleChange}
					/>
                </InputField>

                <InputField>
					<Input
						type="email"
						id="email"
						label="Email"
						onChange={handleChange}
					/>
                </InputField>

                <InputField>
					<Input
						type="text"
						id="phone_number"
						label="Phone Number"
						onChange={handleChange}
					/>
                </InputField>

                <InputField>
					<Input
						type="password"
						id="password"
						label="Password"
						onChange={handleChange}
					/>
                </InputField>

                <InputField>
					<Input
						type="password"
						id="password_confirmation"
						label="Confirm Password"
						onChange={handleChange}
					/>
                </InputField>

                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2"
                    >
                        <option value="">Select Type</option>
                        <option value="1">Nurse</option>
                        <option value="2">Doctor</option>
                        <option value="3">Department Admin</option>
                        <option value="4">Hospital Admin</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="department_id">Department</label>
                    <select name="department_id" id="department_id" onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2"
                    >
                        <option value="">Select Department</option>
                        {
                            departments?.map(department => (
                                <option value={department.id} key={department.id}>{department.name}</option>
                            ))
                        }
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white w-full inline-block px-4 py-2 rounded-md mt-5"
                    >
                        {
                            loading ? "Loading..." : "Add Staff"
                        }
                    </button>
			</form>

		</div>
	);
};

AddStaff.propTypes = {
    hospital: PropTypes.object.isRequired
}
