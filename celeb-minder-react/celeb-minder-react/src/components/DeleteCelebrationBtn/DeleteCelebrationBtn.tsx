import { FaTrash } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";
import { useContext } from "react";
import celebrationStateContext from "../../contexts/CelebrationStateContext";

interface DeleteCelebrationBtnProps {
    celebration: ICelebration,
}

const DeleteCelebrationBtn : React.FC<DeleteCelebrationBtnProps> = ({celebration}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onDeleteBtnClick(): void {
        celebrationContext.deleteCelebration(celebration);
    }

    return (
        <div onClick={onDeleteBtnClick} className="icon"><FaTrash className="iconSvg" /></div>
    );
}

export default DeleteCelebrationBtn;
