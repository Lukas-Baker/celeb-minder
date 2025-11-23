import { FaPlus } from 'react-icons/fa';
import { type ICelebration } from '../../types/ICelebration';
import { useCelebrations } from '../../hooks/useCelebrations';

interface AddCelebrationBtnProps {
  celebration: ICelebration;
}

const AddCelebrationBtn: React.FC<AddCelebrationBtnProps> = ({celebration}) => {
    const {addCelebration, setToCreateMode} = useCelebrations();

    function onAddBtnClick(): void {
      // TBD LP: Add it to the API
      // TBD LP: Add confirm window (maybe a component?)
      addCelebration(celebration);
      setToCreateMode();
    }

    return (
        <div onClick={onAddBtnClick} className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
