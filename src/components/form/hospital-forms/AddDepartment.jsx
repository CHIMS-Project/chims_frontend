import axios from "axios"
import { useContext, useState } from "react"
import { BACKEND_API_URL } from "../../../utils/constants"
import { getToken } from "../../../utils/helpers"
import { CardContainer } from "../../cards/CardContainer"
import { InputField } from "../input-fields/InputField"
import { Input } from "../form-elements/Input"
import { AppConfigsContext } from "../../../serviceProviders/contexts/AppConfigsContext"
import PropTypes from 'prop-types'

export const AddDepartment = ({id, onSuccess}) => {
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { setPopUpMessage } = useContext(AppConfigsContext)

    const handleNameChange = (e) => setName(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === '') return setError("Department name is required")

        setError(null)
        setLoading(true)

        axios.post(`${BACKEND_API_URL}departments`,{
            name: name,
            hospital_id: id
        }, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                Accept: 'application/json'
            }
        })
        .then(() => {
            onSuccess()
            setPopUpMessage(`Department ${name} added successfully`)
        }  )
        .catch((err) => {
            console.log(err)
            setError("Something happened");
        })
        .finally(() => setLoading(false))

    }
  return (
    <CardContainer className="w-full max-w-lg fixed top-1/2 left-1/2 -translate-x-1/2 bg-slate-50 " >
        <form className="w-full" onSubmit={handleSubmit}>
            {
                error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            }
            <InputField>
                <Input type="text" id="name" label="Department Name" onChange={handleNameChange} />
            </InputField>
            <button disabled={loading}  className="bg-primary-400 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded-md w-full inline-block" type="submit">
                {
                    loading ? "Loading..." : "Add Department"
                }
            </button>
        </form>
    </CardContainer>
  )
}

AddDepartment.propTypes = {
    id: PropTypes.number.isRequired,
    onSuccess: PropTypes.func.isRequired
}
