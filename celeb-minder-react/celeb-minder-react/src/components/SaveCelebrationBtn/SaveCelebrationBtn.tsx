import { FaSave } from "react-icons/fa";
import { NewCelebration, type ICelebration } from "../../types/ICelebration";
import { sortCelebrationsByDate } from "../../helpers/sortHelpers";

interface SaveCelebrationBtnProps {
    celebration: ICelebration;
    setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
    setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveCelebrationBtn : React.FC<SaveCelebrationBtnProps> = ({celebration, setCelebrations, setCelebration, setIsEdit}) => {
    function onSaveBtnClick(): void {
        setCelebrations(celebrations => {
            const newCelebrations = celebrations.map(c => c.Id == celebration.Id ? celebration : c);
            return sortCelebrationsByDate(newCelebrations);
        });
        setCelebration(NewCelebration);
        setIsEdit(false);
    }

    return (
        <div onClick={onSaveBtnClick} className="icon"><FaSave className="iconSvg" /></div>
    )
}

export default SaveCelebrationBtn;