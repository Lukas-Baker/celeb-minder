import { FaPlus } from 'react-icons/fa';
import type { ICelebration } from '../../types/ICelebration';

interface AddCelebrationBtnProps {
  celebration: ICelebration;
}

const AddCelebrationBtn : React.FC<AddCelebrationBtnProps> = ({celebration}) => {
    function onAddBtnClick(): void {
      // TBD LP: Add it to the API
      console.log(celebration);
    }

    return (
        <div onClick={onAddBtnClick} className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
