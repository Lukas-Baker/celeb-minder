import { FaSave } from "react-icons/fa";
import { type ICelebration } from "../../types/ICelebration";
import { sortCelebrationsByDate } from "../../helpers/sortHelpers";
import { useContext } from "react";
import celebrationStateContext from "../../contexts/CelebrationStateContext";

interface SaveCelebrationBtnProps {
    celebration: ICelebration;
    setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
}

const SaveCelebrationBtn : React.FC<SaveCelebrationBtnProps> = ({celebration, setCelebrations}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onSaveBtnClick(): void {
        setCelebrations(celebrations => {
            const newCelebrations = celebrations.map(c => c.Id == celebration.Id ? celebration : c);
            return sortCelebrationsByDate(newCelebrations);
        });

        celebrationContext.setToCreateMode();
    }

    return (
        <div onClick={onSaveBtnClick} className="icon"><FaSave className="iconSvg" /></div>
    )
}

export default SaveCelebrationBtn;