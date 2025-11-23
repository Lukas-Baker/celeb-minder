import { FaEdit } from "react-icons/fa";
import type { ICelebration } from "../../types/ICelebration";
import { useCelebrations } from "../../hooks/useCelebrations";

interface LoadCelebrationToFormProps {
    celebration: ICelebration;
}

const LoadCelebrationToFormBtn : React.FC<LoadCelebrationToFormProps> = ({celebration}) => {
    const { loadCelebrationToForm } = useCelebrations();

    function onEditBtnClick(): void {
        loadCelebrationToForm(celebration);
    }

    return (
        <div onClick={onEditBtnClick} className="icon"><FaEdit className="iconSvg" /></div>
    );
}

export default LoadCelebrationToFormBtn;
