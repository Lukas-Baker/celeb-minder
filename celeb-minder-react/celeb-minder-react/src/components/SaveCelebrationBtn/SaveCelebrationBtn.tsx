import { FaSave } from "react-icons/fa";
import { type ICelebration } from "../../types/ICelebration";
import { useContext } from "react";
import celebrationStateContext from "../../contexts/CelebrationStateContext";

interface SaveCelebrationBtnProps {
    celebration: ICelebration;
}

const SaveCelebrationBtn : React.FC<SaveCelebrationBtnProps> = ({celebration}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onSaveBtnClick(): void {
        celebrationContext.editCelebration(celebration);
        celebrationContext.setToCreateMode();
    }

    return (
        <div onClick={onSaveBtnClick} className="icon"><FaSave className="iconSvg" /></div>
    )
}

export default SaveCelebrationBtn;