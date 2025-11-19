import { FaEdit } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";

interface EditCelebrationBtnProps {
    celebration: ICelebration;
    setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

const EditCelebrationBtn : React.FC<EditCelebrationBtnProps> = ({celebration, setCelebration, setIsEdit}) => {

    function onEditBtnClick(): void {
        setCelebration(celebration);
        setIsEdit(true);
    }

    return (
        <div onClick={onEditBtnClick} className="icon"><FaEdit className="iconSvg" /></div>
    );
}

export default EditCelebrationBtn;
