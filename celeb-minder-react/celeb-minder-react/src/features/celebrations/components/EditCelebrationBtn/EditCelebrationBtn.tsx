import { FaSave } from "react-icons/fa";
import { useCelebrations } from "../../hooks/useCelebrations";
import type { ICelebrationFormData } from "../../types/ICelebrationFormData";
import { DefaultCelebration } from "../../types/ICelebration";

interface EditCelebrationBtnProps {
    getCelebrationFormData: () => ICelebrationFormData;
}

const EditCelebrationBtn : React.FC<EditCelebrationBtnProps> = ({getCelebrationFormData}) => {
    const { editCelebration, setToCreateMode } = useCelebrations();
    const { isValid, celebration, setCelebrationToForm } = getCelebrationFormData();

    function onSaveBtnClick(): void {
        if (isValid) {
            editCelebration(celebration);
            setCelebrationToForm(DefaultCelebration);
            setToCreateMode();
        } else {
            console.log("onEditBtnClick was called but form data was invalid");
        }
    }

    return (
        // TBD LP: Make the button look disabled when form not valid
        <div onClick={onSaveBtnClick} className="icon"><FaSave className="iconSvg" /></div>
    )
}

export default EditCelebrationBtn;