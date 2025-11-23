import { FaSave } from "react-icons/fa";
import { type ICelebration } from "../../types/ICelebration";
import { useCelebrations } from "../../hooks/useCelebrations";

interface EditCelebrationBtnProps {
    celebration: ICelebration;
}

const EditCelebrationBtn : React.FC<EditCelebrationBtnProps> = ({celebration}) => {
    const { editCelebration, setToCreateMode } = useCelebrations();

    function onSaveBtnClick(): void {
        editCelebration(celebration);
        setToCreateMode();
    }

    return (
        <div onClick={onSaveBtnClick} className="icon"><FaSave className="iconSvg" /></div>
    )
}

export default EditCelebrationBtn;