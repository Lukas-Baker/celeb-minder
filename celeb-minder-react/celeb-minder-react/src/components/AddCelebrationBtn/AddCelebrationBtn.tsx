import { FaPlus } from 'react-icons/fa';
import { NewCelebration, type ICelebration } from '../../types/ICelebration';
import { sortCelebrationsByDate } from '../../helpers/sortHelpers';

interface AddCelebrationBtnProps {
  celebration: ICelebration;
  setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
  setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>;
}

const AddCelebrationBtn: React.FC<AddCelebrationBtnProps> = ({celebration, setCelebrations, setCelebration}) => {
    function onAddBtnClick(): void {
      // TBD LP: Add it to the API
      // TBD LP: Add confirm window (maybe a component?)
      setCelebrations((celebrations) => {
        // TBD LP: Id generation with API should be done differently
        celebration.Id = celebrations.length !== 0 ? Math.max(...celebrations.map(c => c.Id)) + 1 : 1;
        const newCelebrations = [...celebrations, celebration];
        return sortCelebrationsByDate(newCelebrations);
      });

      setCelebration(NewCelebration);
      // TBD LP: How to clear the form now?
    }

    return (
        <div onClick={onAddBtnClick} className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
