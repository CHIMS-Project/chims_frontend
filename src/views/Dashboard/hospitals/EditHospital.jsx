import { useOutletContext } from "react-router-dom"
import { CardContainer } from "../../../components/cards/CardContainer"
import { EditHospitalName } from "../../../components/form/hospital-forms/EditHospitalName"
import { CardHeader } from "../../../components/cards/CardHeader"
import { EditHospitalAddress } from "../../../components/form/hospital-forms/EditHospitalAddress"
import { DepartmentsList } from "../../../components/lists/DepartmentsList"
import { AddStaff } from "../../../components/form/hospital-forms/AddStaff"

export const EditHospital = () => {
  const { hospital } = useOutletContext()
  const staffCount = hospital?.staff?.length
  // const doctorsCount = hospital?.staff?.filter((staff) => staff.role === "doctor").length
  // const nursesCount = hospital?.staff?.filter((staff) => staff.role === "nurse").length
  // const adminsCount = hospital?.staff?.filter((staff) => staff.role === "hospital-admin").length

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

      <CardContainer className={"w-full max-w-2xl max-h-[24rem] overflow-auto mb-4"}>
        <CardHeader title={"Hospital Departments"} />
        <DepartmentsList id={hospital?.id} />
      </CardContainer>

      <CardContainer className={"w-full max-w-2xl"}>
        <CardHeader title={"Hospital Staff"} />
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-sm text-gray-400">Total Staff: {staffCount}</p>
          {/* <p className="text-sm text-gray-400">Doctors: {doctorsCount}</p>
          <p className="text-sm text-gray-400">Nurses: {nursesCount}</p>
          <p className="text-sm text-gray-400">Admins: {adminsCount}</p> */}
        </div>
        <AddStaff hospital={hospital} />
      </CardContainer>

    </div>
  )
}
