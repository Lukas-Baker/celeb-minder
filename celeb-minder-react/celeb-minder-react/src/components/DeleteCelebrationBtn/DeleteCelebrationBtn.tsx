import { FaTrash } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";

interface DeleteCelebrationBtnProps {
    celebration: ICelebration,
}

const DeleteCelebrationBtn : React.FC<DeleteCelebrationBtnProps> = ({celebration}) => {
    function onDeleteBtnClick(): void {
        // TBD LP: Delete it
        console.log(celebration);
    }

    return (
        <div onClick={onDeleteBtnClick} className="icon"><FaTrash className="iconSvg" /></div>
    );
}

export default DeleteCelebrationBtn;
