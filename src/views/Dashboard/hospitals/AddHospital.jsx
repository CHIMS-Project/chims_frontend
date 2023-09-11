import { CardContainer } from "../../../components/cards/CardContainer";
import { AddHospitalForm } from "../../../components/form/AddHospitalForm";

export const AddHospital = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary-700 mb-4">Add Hospital</h1>
      <CardContainer className={"w-full max-w-lg"}>
        <AddHospitalForm />
      </CardContainer>
    </div>
  );
};
