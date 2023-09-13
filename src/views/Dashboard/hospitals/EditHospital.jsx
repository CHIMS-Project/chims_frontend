import { useOutletContext } from "react-router-dom"
import { CardContainer } from "../../../components/cards/CardContainer"
import { EditHospitalName } from "../../../components/form/hospital-forms/EditHospitalName"
import { CardHeader } from "../../../components/cards/CardHeader"
import { EditHospitalAddress } from "../../../components/form/hospital-forms/EditHospitalAddress"

export const EditHospital = () => {
  const { hospital } = useOutletContext()

  return (
    <div className="mt-5" >
      <h3 className="text-xl font-bold text-primary-300 mb-4">Edit Hospital</h3>

      <CardContainer className={"w-full max-w-2xl mb-10"}>
        <CardHeader title={"Edit Hospital Name"} />
        <EditHospitalName prevHospitalName={hospital?.name} />
      </CardContainer>

      <CardContainer className={"w-full max-w-2xl mb-10"}>
        <CardHeader title={"Edit Hospital Address"} />
        <EditHospitalAddress prevCity={hospital?.city} prevRegion={hospital?.region} />
      </CardContainer>

      <CardContainer className={"w-full max-w-2xl max-h-[24rem]"}>
        <CardHeader title={"Hospital Departments"} />
        <EditHospitalAddress prevCity={hospital?.city} prevRegion={hospital?.region} />
      </CardContainer>

    </div>
  )
}
