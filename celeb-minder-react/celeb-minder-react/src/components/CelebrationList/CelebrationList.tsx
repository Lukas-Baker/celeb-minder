import type { ICelebration } from "../../types/ICelebration";
import Celebration from "../Celebration/Celebration";
import styles from "./CelebrationList.module.less";

interface CelebrationListProps {
    celebrations: ICelebration[];
    setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>;
    setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
}

const CelebrationList : React.FC<CelebrationListProps> = ({celebrations, setCelebration, setCelebrations}) => {
    return (
        <div className={styles.celebrationListWrapper}>
            <h2 className="text-center">Upcoming celebrations</h2>
            <div className={styles.celebrationList}>
                { celebrations.map((c) => (
                    <Celebration celebration={c}
                                 setCelebration={setCelebration}
                                 setCelebrations={setCelebrations}
                                 key={c.Id} />
                ))}
            </div>
        </div>
    )
}

export default CelebrationList;
