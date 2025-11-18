import { FaPlus } from 'react-icons/fa';
import type { ICelebration } from '../../types/ICelebration';

interface AddCelebrationBtnProps {
  celebration: ICelebration;
  setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
}

const AddCelebrationBtn : React.FC<AddCelebrationBtnProps> = ({celebration, setCelebrations}) => {
    function onAddBtnClick(): void {
      // TBD LP: Add it to the API
      setCelebrations((celebrations) => {
        // TBD LP: Id generation with API should be done differently
        celebration.Id = Math.max(...celebrations.map(c => c.Id)) + 1;
        const newCelebrations = [...celebrations, celebration];
        return newCelebrations.sort((a, b) => a.When.getTime() - b.When.getTime());
      });

      // TBD LP: How to clear the form now?
    }

    return (
        <div onClick={onAddBtnClick} className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
