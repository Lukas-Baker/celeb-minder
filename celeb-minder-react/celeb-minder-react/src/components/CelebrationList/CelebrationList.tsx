import type { ICelebration } from "../../types/ICelebration";
import Celebration from "../Celebration/Celebration";
import styles from "./CelebrationList.module.less";

interface CelebrationListProps {
    celebrations: ICelebration[];
    setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
}

const CelebrationList : React.FC<CelebrationListProps> = ({celebrations, setCelebration, setIsEdit, setCelebrations}) => {
    return (
        <div className={styles.celebrationListWrapper}>
            <h2 className="text-center">Upcoming celebrations</h2>
            <div className={styles.celebrationList}>
                { celebrations.map((c) => (
                    <Celebration celebration={c}
                                 setCelebration={setCelebration}
                                 setIsEdit={setIsEdit}
                                 setCelebrations={setCelebrations}
                                 key={c.Id} />
                ))}
            </div>
        </div>
    )
}

export default CelebrationList;
