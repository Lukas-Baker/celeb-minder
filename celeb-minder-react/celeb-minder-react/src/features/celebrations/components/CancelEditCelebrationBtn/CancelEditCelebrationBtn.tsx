import { FaTimesCircle } from "react-icons/fa";
import { useCelebrations } from "../../hooks/useCelebrations";

const CancelEditCelebrationBtn = () => {
    const {setToCreateMode} = useCelebrations();

    function onCancelBtnClick() {
        setToCreateMode();
    }

    return (
        <div onClick={onCancelBtnClick} className="icon"><FaTimesCircle className="iconSvg" /></div>
    );
}

export default CancelEditCelebrationBtn;