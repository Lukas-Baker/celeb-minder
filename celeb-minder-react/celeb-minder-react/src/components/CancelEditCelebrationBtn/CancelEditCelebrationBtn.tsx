import { useContext, type SetStateAction } from "react";
import { NewCelebration, type ICelebration } from "../../types/ICelebration";
import { FaTimesCircle } from "react-icons/fa";
import celebrationStateContext from "../../contexts/CelebrationStateContext";

interface CancelEditCelebrationBtnProps {
    setCelebration: React.Dispatch<SetStateAction<ICelebration>>;
}

const CancelEditCelebrationBtn: React.FC<CancelEditCelebrationBtnProps> = ({setCelebration}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onCancelBtnClick() {
        setCelebration(NewCelebration);
        celebrationContext.setIsEdit(false);
    }

    return (
        <div onClick={onCancelBtnClick} className="icon"><FaTimesCircle className="iconSvg" /></div>
    );
}

export default CancelEditCelebrationBtn;