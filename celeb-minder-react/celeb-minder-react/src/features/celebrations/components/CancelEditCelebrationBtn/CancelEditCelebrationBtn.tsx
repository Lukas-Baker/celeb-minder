import { useContext } from "react";
import { FaTimesCircle } from "react-icons/fa";
import celebrationStateContext from "../../contexts/CelebrationStateContext";

const CancelEditCelebrationBtn = () => {
    const celebrationContext = useContext(celebrationStateContext);

    function onCancelBtnClick() {
        celebrationContext.setToCreateMode();
    }

    return (
        <div onClick={onCancelBtnClick} className="icon"><FaTimesCircle className="iconSvg" /></div>
    );
}

export default CancelEditCelebrationBtn;