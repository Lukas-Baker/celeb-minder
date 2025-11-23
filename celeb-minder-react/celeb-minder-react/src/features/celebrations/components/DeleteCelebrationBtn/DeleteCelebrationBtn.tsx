import { FaTrash } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";
import { useCelebrations } from "../../hooks/useCelebrations";

interface DeleteCelebrationBtnProps {
    celebration: ICelebration,
}

const DeleteCelebrationBtn : React.FC<DeleteCelebrationBtnProps> = ({celebration}) => {
    const { deleteCelebration } = useCelebrations();

    function onDeleteBtnClick(): void {
        deleteCelebration(celebration);
    }

    return (
        <div onClick={onDeleteBtnClick} className="icon"><FaTrash className="iconSvg" /></div>
    );
}

export default DeleteCelebrationBtn;
