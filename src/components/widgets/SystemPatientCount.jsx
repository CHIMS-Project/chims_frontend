import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { CardBody } from "../cards/CardBody"
import { CardContainer } from "../cards/CardContainer"
import { CardHeader } from "../cards/CardHeader"
import { SmallCardDetail } from "../cards/SmallCardDetail"
import { Link } from "react-router-dom"

export const SystemPatientCount = () => {
  return (
    <Link to={'patients'}
      className="hover:no-underline hover:ring hover:ring-primary-400 rounded-lg transition">
    <CardContainer>
        <CardHeader title={'Patients Total'} />
        <CardBody>
          <SmallCardDetail figure={3321} detailTitle="Patients" icon={faUsers} />
        </CardBody>
      </CardContainer>
    </Link>
  )
}
