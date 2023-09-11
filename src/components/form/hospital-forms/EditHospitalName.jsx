import { Input } from "../form-elements/Input";
import { InputField } from "../input-fields/InputField";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BACKEND_API_URL } from "../../../utils/constants";
import { useParams } from "react-router-dom";
import { getToken } from "../../../utils/helpers";
import { AppConfigsContext } from "../../../serviceProviders/contexts/AppConfigsContext";

export const EditHospitalName = ({ prevHospitalName }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { setPopUpMessage } = useContext(AppConfigsContext);

  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    // console.log(name)
    if (name === "") {
      setError("Hospital name is required");
      return;
    }

    setLoading(true);

    axios
      .patch(
        `${BACKEND_API_URL}hospitals/${id}`,
        { name: name },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setPopUpMessage("Hospital name updated successfully");
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
    <>
      <div className="mb-4 w-full mt-4">
        <form className="w-full" onSubmit={handleSubmit}>
          <InputField>
            <Input
              defaultValue={prevHospitalName}
              type="text"
              id="name"
              label="Hospital Name"
              onChange={handleNameChange}
            />
          </InputField>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {(name !== '' && name !== prevHospitalName) && (
            <button
              disabled={loading}
              className="px-4 py-1 bg-primary-500 hover:bg-primary-600 text-white rounded-md"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          )}
        </form>
      </div>
    </>
  );
};

EditHospitalName.propTypes = {
  prevHospitalName: PropTypes.string,
};
