import { RoundedBtn } from "./RoundedBtn"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

export const RoundedNextBtn = ({ onClick, isLoading = false }) => {
  return (
    <RoundedBtn icon={faArrowRight} onClick={onClick} isLoading={isLoading} />
  )
}

RoundedNextBtn.propTypes = {
    onClick: PropTypes.func,
    isLoading: PropTypes.bool
}
