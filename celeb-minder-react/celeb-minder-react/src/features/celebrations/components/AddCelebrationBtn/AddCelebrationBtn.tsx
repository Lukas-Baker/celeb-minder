import { FaPlus } from 'react-icons/fa';
import { type ICelebration } from '../../types/ICelebration';
import celebrationStateContext from "../../contexts/CelebrationStateContext";
import { useContext } from 'react';

interface AddCelebrationBtnProps {
  celebration: ICelebration;
}

const AddCelebrationBtn: React.FC<AddCelebrationBtnProps> = ({celebration}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onAddBtnClick(): void {
      // TBD LP: Add it to the API
      // TBD LP: Add confirm window (maybe a component?)
      celebrationContext.addCelebration(celebration);
      celebrationContext.setToCreateMode();
    }

    return (
        <div onClick={onAddBtnClick} className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
