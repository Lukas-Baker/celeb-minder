import { FaEdit } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";

interface EditCelebrationBtnProps {
    celebration: ICelebration;
}

const EditCelebrationBtn : React.FC<EditCelebrationBtnProps> = ({celebration}) => {

    function onEditBtnClick(): void {
        // TBD LP: Delete it
        console.log(celebration);
    }

    return (
        <div onClick={onEditBtnClick} className="icon"><FaEdit className="iconSvg" /></div>
    );
}

export default EditCelebrationBtn;
