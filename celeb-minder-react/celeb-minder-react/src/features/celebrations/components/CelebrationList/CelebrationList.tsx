import { useCelebrations } from "../../hooks/useCelebrations";
import Celebration from "../Celebration/Celebration";
import styles from "./CelebrationList.module.less";

const CelebrationList = () => {
    const { celebrations } = useCelebrations();

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
