import { FaEdit } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";
import { useContext } from "react";
import celebrationStateContext from "../../contexts/CelebrationStateContext";

interface EditCelebrationBtnProps {
    celebration: ICelebration;
}

const EditCelebrationBtn : React.FC<EditCelebrationBtnProps> = ({celebration}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onEditBtnClick(): void {
        celebrationContext.loadCelebrationToForm(celebration);
    }

    return (
        <div onClick={onEditBtnClick} className="icon"><FaEdit className="iconSvg" /></div>
    );
}

export default EditCelebrationBtn;
