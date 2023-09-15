import { useCallback, useContext, useEffect, useState } from "react"
import { UserContext } from "../../../serviceProviders/contexts/UserContext"
import axios from "axios"
import { BACKEND_API_URL } from "../../../utils/constants"
import { getToken } from "../../../utils/helpers"
// import { Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation } from "@fortawesome/free-solid-svg-icons"
import { CardContainer } from "../../../components/cards/CardContainer"

export const Admissions = () => {
    const { user, setUser } = useContext(UserContext)
    const { id } = user
    const [hospital, setHospital] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchHospital = useCallback(() => {
      setError(null)
      setLoading(true)

      axios.get(`${BACKEND_API_URL}staff/${id}`, {
        headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json'
        }
      })
      .then(res => {
        console.log(res.data.data.hospital)
        setHospital(res.data.data.hospital)
        setUser((prevUser) => ({...prevUser, hospital: res.data.data.hospital}))
      })
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
    }, [id, setUser])
    

    useEffect(() => fetchHospital(), [fetchHospital])

    if(loading) return <div>Loading...</div>

    if(error) return (
      <div>
        Error loading resource <br />
        <button onClick={fetchHospital} >Retry</button>
      </div>
    )
  return (
    <div>
    <CardContainer className={"w-full"}>
      <h1 className="text-4xl font-bold text-primary-700 mb-4">
        {hospital?.name}
      </h1>

      <div className="flex flex-row mt-3 gap-2">
        <div className="flex items-center px-4 py-1 bg-slate-100 rounded-full">
          <span>
            <FontAwesomeIcon icon={faLocation} />
          </span>
          <p className="text-sm text-gray-500 ml-2">
            {hospital?.city}, {hospital?.region}{" "}
          </p>
        </div>
      </div>


    </CardContainer>

  </div>

  )
}
