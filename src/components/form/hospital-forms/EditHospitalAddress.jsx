import axios from "axios";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../../utils/constants";
import { getToken } from "../../../utils/helpers";
import { AppConfigsContext } from "../../../serviceProviders/contexts/AppConfigsContext";
import { InputField } from "../input-fields/InputField";
import { Input } from "../form-elements/Input";
import PropTypes from "prop-types";

export const EditHospitalAddress = ({ prevCity, prevRegion }) => {
	const [formData, setFormData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const { setPopUpMessage } = useContext(AppConfigsContext);

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(null);

		// return console.log(formData)

		if (!formData.city && !formData.region)
			return setError("Hospital city or region is required");

      setLoading(true);

		axios
			.patch(`${BACKEND_API_URL}hospitals/${id}`, formData, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					Accept: "application/json",
				},
			})
			.then((res) => {
				console.log(res.data);
				setPopUpMessage(
					"Hospital address updated successfully. Refreshing page..."
				);
				// refresh the page after 2 seconds
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
				setError(err.response.data.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<div className="mb-4 w-full mt-4">
			<form
				className="w-full"
				onSubmit={handleSubmit}>
				<InputField>
					<Input
						defaultValue={prevCity}
						type="text"
						id="city"
						label="Hospital City"
						onChange={handleChange}
					/>
				</InputField>
				<InputField>
					<Input
						defaultValue={prevRegion}
						type="text"
						id="region"
						label="Hospital Region"
						onChange={handleChange}
					/>
				</InputField>
				{error && <p className="text-red-500 text-sm">{error}</p>}

				{(( formData?.city === prevCity) ||
					formData?.region === prevRegion) && (
					<button
						disabled={loading}
						className="px-4 py-1 bg-primary-500 hover:bg-primary-600 text-white rounded-md">
						{loading ? "Saving..." : "Save"}
					</button>
				)}
			</form>
		</div>
	);
};

EditHospitalAddress.propTypes = {
	prevCity: PropTypes.string.isRequired,
	prevRegion: PropTypes.string.isRequired,
};
