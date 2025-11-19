import { FaTrash } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";
import type { Dispatch, SetStateAction } from "react";

interface DeleteCelebrationBtnProps {
    celebration: ICelebration,
    setCelebrations: Dispatch<SetStateAction<ICelebration[]>>,
}

const DeleteCelebrationBtn : React.FC<DeleteCelebrationBtnProps> = ({celebration, setCelebrations}) => {
    function onDeleteBtnClick(): void {
        setCelebrations(celebrations => celebrations.filter(c => c.Id !== celebration.Id));
    }

    return (
        <div onClick={onDeleteBtnClick} className="icon"><FaTrash className="iconSvg" /></div>
    );
}

export default DeleteCelebrationBtn;
