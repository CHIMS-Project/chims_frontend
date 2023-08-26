import { RoundedBtn } from "./RoundedBtn"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

export const RoundedNextBtn = ({ onClick }) => {
  return (
    <RoundedBtn icon={faArrowRight} onClick={onClick} />
  )
}

RoundedNextBtn.propTypes = {
    onClick: PropTypes.func
}
