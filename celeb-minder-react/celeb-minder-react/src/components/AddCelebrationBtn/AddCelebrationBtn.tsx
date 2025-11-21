import { FaPlus } from 'react-icons/fa';
import { type ICelebration } from '../../types/ICelebration';
import { sortCelebrationsByDate } from '../../helpers/sortHelpers';
import celebrationStateContext from '../../contexts/CelebrationStateContext';
import { useContext } from 'react';

interface AddCelebrationBtnProps {
  celebration: ICelebration;
  setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
}

const AddCelebrationBtn: React.FC<AddCelebrationBtnProps> = ({celebration, setCelebrations}) => {
    const celebrationContext = useContext(celebrationStateContext);

    function onAddBtnClick(): void {
      // TBD LP: Add it to the API
      // TBD LP: Add confirm window (maybe a component?)
      setCelebrations((celebrations) => {
        // TBD LP: Id generation with API should be done differently
        celebration.Id = celebrations.length !== 0 ? Math.max(...celebrations.map(c => c.Id)) + 1 : 1;
        const newCelebrations = [...celebrations, celebration];
        return sortCelebrationsByDate(newCelebrations);
      });

      celebrationContext.setToCreateMode();
    }

    return (
        <div onClick={onAddBtnClick} className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
