import { useState, useContext } from "react";
import { BACKEND_API_URL } from "../../utils/constants";
import { getToken } from "../../utils/helpers";
import { InputField } from "./input-fields/InputField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "./form-elements/Input";
import { AppConfigsContext } from "../../serviceProviders/contexts/AppConfigsContext";
// import 


export const AddHospitalForm = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [sending, setSending] = useState(false);
    const navigate = useNavigate();
    const { setPopUpMessage } = useContext(AppConfigsContext)
  
    const handleChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  

    const handleSubmit = (e) => {
      e.preventDefault();
      // check if all fields are filled
      if (Object.keys(formData).length < 3) {
        return setError("Please fill all fields");
      }
  
      // check individual fields
      if (!formData.name) {
        return setError("Please enter hospital name");
      }
  
      if (!formData.city) {
        return setError("Please enter city");
      }
  
      if (!formData.region) {
        return setError("Please enter region");
      }
  
      // send data to server
      setSending(true);
  
      axios
        .post(`${BACKEND_API_URL}hospitals`,formData,{
          headers: {
            Authorization: `Bearer ${getToken()}`,
            Accept: "application/json",
          }
        })
        .then((res) => {
          console.log(res.data);
          navigate(`/app/hospitals/${res.data.data.id}/edit`);
          setPopUpMessage(`${formData.name} hospital added successfully`)

        })
        .catch((err) => {
          console.log(err);
          setError("Something went wrong");
        })
        .finally(() => {
          setSending(false);
        });
    };
  
  
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <InputField>
          <Input
            type="text"
            id="name"
            name="name"
            label="Hospital Name"
            onChange={handleChange}
          />
        </InputField>
        <InputField>
          <Input
            type="text"
            id="city"
            name="city"
            label="City"
            onChange={handleChange}
          />
        </InputField>
        <InputField>
          <Input
            type="text"
            id="region"
            name="region"
            label="Region"
            onChange={handleChange}
          />
        </InputField>

        <button
          disabled={sending}
          className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition duration-200"
        >
          {sending ? "Sending..." : "Add Hospital"}
        </button>
      </form>
    </>
  );
};
