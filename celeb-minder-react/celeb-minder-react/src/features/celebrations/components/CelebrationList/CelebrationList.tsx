import type { ICelebration } from "../../types/ICelebration";
import Celebration from "../Celebration/Celebration";
import styles from "./CelebrationList.module.less";

interface CelebrationListProps {
    celebrations: ICelebration[];
}

const CelebrationList : React.FC<CelebrationListProps> = ({celebrations}) => {
    return (
        <div className={styles.celebrationListWrapper}>
            <h2 className="text-center">Upcoming celebrations</h2>
            <div className={styles.celebrationList}>
                { celebrations.map((c) => (
                    <Celebration celebration={c} key={c.Id} />
                ))}
            </div>
        </div>
    )
}

export default CelebrationList;
