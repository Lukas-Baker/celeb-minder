import type { SetStateAction } from "react";
import { NewCelebration, type ICelebration } from "../../types/ICelebration";
import { FaTimesCircle } from "react-icons/fa";

interface CancelEditCelebrationBtnProps {
    setCelebration: React.Dispatch<SetStateAction<ICelebration>>;
    setIsEdit: React.Dispatch<SetStateAction<boolean>>;
}

const CancelEditCelebrationBtn: React.FC<CancelEditCelebrationBtnProps> = ({setCelebration, setIsEdit}) => {

    function onCancelBtnClick() {
        setCelebration(NewCelebration);
        setIsEdit(false);
    }

    return (
        <div onClick={onCancelBtnClick} className="icon"><FaTimesCircle className="iconSvg" /></div>
    );
}

export default CancelEditCelebrationBtn;