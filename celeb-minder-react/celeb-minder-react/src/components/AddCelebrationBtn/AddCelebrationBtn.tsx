import { FaPlus } from 'react-icons/fa';
import type { ICelebration } from '../../types/ICelebration';

interface CelebrationProps {
  celebration: ICelebration;
}

const AddCelebrationBtn : React.FC<CelebrationProps> = ({celebration}) => {
    console.log(celebration);
    return (
        <div className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
