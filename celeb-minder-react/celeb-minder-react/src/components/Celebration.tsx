import type { ICelebration } from "../types/ICelebration";
import styles from "./Celebration.module.less";
import { getCelebrationName } from "../types/CelebrationTypeEnum";

interface Props {
    celebration: ICelebration,
}

function Celebration({celebration}: Props) {
    return (
        <div className={styles.celebration}>
            <div className="row">
                <div className="col-8">
                    <div>{celebration.Who}</div>
                    <div>{getCelebrationName(celebration.CelebrationType)}</div>
                </div>
                <div className="col-4">
                    TBD LP Icons
                </div>
            </div>
            <div className={`row ${styles.celebrationFooter}`}>
                <div className="col-12">
                    {celebration.When.toLocaleDateString('cs-CZ')}
                </div>
            </div>
        </div>
    )
}

export default Celebration;
