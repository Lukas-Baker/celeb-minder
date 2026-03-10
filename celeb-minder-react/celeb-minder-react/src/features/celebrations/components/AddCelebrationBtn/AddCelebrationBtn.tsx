import { FaPlus } from 'react-icons/fa';
import { useCelebrations } from '../../hooks/useCelebrations';
import type { ICelebrationFormData } from '../../types/ICelebrationFormData';
import { DefaultCelebration } from '../../types/ICelebration';

interface AddCelebrationBtnProps {
  getCelebrationFormData: () => ICelebrationFormData;
  forceValidation: () => void;
}

const AddCelebrationBtn: React.FC<AddCelebrationBtnProps> = ({getCelebrationFormData, forceValidation}) => {
    const {addCelebration, setToCreateMode} = useCelebrations();
    const {isValid, celebration, setCelebrationToForm} = getCelebrationFormData();

    function onAddBtnClick(): void {
      // TBD LP: Add it to the API
      // TBD LP: Add confirm window (maybe a component?)
      if (isValid) {
        addCelebration(celebration);
        setCelebrationToForm(DefaultCelebration);
        setToCreateMode();
      } else {
            forceValidation();
      }
    }

    return (
      // TBD LP: do disable
      <div onClick={onAddBtnClick} className="icon"><FaPlus className="iconSvg" /></div>
    );
}

export default AddCelebrationBtn;
