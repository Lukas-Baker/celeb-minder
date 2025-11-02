import type { ICelebration } from "../types/ICelebration";
import styles from "./Celebration.module.less";
import { getCelebrationName } from "../types/CelebrationTypeEnum";
import { isWithinFourWeeks, isWithingAWeek } from "../helpers/dateHelpers";
import { FaEdit, FaTrash } from 'react-icons/fa';


interface Props {
    celebration: ICelebration,
}

function Celebration({celebration}: Props) {
    function getUrgencyClass(date: Date): string {
        if (isWithingAWeek(date)) {
            return styles.celebrationDanger;
        } else if (isWithinFourWeeks(date)) {
            return styles.celebrationWarning;
        }
        return ""
    }

    return (
        <div className={`${styles.celebration} ${getUrgencyClass(celebration.When)}`}>
            <div className="row">
                <div className="col-8">
                    <div className={styles.topLeftSection}>
                        <div className={styles.who}>{celebration.Who}</div>
                        <div>{getCelebrationName(celebration.CelebrationType)}</div>
                    </div>
                </div>
                <div className="col-4 text-end">
                    <div className={styles.icons}>
                        <div className={styles.icon}><FaEdit className={styles.iconSvg} /></div>
                        <div className={styles.icon}><FaTrash className={styles.iconSvg} /></div>
                    </div>
                </div>
            </div>
            <div className={`row ${styles.celebrationFooter}`}>
                <div className="col-12">
                    <div className={styles.bottomLeftSection}>
                        {celebration.When.toLocaleDateString('cs-CZ')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Celebration;
