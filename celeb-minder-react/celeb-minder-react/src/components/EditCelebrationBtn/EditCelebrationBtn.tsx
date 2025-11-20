import { FaEdit } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";
import { useContext } from "react";
import celebrationStateContext from "../../contexts/CelebrationStateContext";

interface EditCelebrationBtnProps {
    celebration: ICelebration;
    setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>,
}

const EditCelebrationBtn : React.FC<EditCelebrationBtnProps> = ({celebration, setCelebration}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onEditBtnClick(): void {
        setCelebration(celebration);
        celebrationContext.setIsEdit(true);
    }

    return (
        <div onClick={onEditBtnClick} className="icon"><FaEdit className="iconSvg" /></div>
    );
}

export default EditCelebrationBtn;
