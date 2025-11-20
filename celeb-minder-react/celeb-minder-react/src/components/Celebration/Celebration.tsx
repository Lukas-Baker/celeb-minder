import type { ICelebration } from "../../types/ICelebration";
import styles from "./Celebration.module.less";
import { getCelebrationName } from "../../types/CelebrationTypeEnum";
import { dateToString, isWithinFourWeeks, isWithingAWeek } from "../../helpers/dateHelpers";
import EditCelebrationBtn from "../EditCelebrationBtn/EditCelebrationBtn";
import DeleteCelebrationBtn from "../DeleteCelebrationBtn/DeleteCelebrationBtn";
import type { SetStateAction } from "react";

interface Props {
    celebration: ICelebration,
    setCelebration: React.Dispatch<SetStateAction<ICelebration>>,
    setCelebrations: React.Dispatch<SetStateAction<ICelebration[]>>,
}

function Celebration({celebration, setCelebration, setCelebrations}: Props) {
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
                    <div className="icons">
                        <EditCelebrationBtn celebration={celebration} setCelebration={setCelebration} />
                        <DeleteCelebrationBtn celebration={celebration} setCelebrations={setCelebrations} />
                    </div>
                </div>
            </div>
            <div className={`row ${styles.celebrationFooter}`}>
                <div className="col-12">
                    <div className={styles.bottomLeftSection}>
                        {dateToString(celebration.When)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Celebration;
