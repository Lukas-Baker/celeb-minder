import type { ICelebration } from "../types/ICelebration";
import { CelebrationType } from "../types/CelebrationTypeEnum";
import { Repeat } from "../types/RepeatEnum";
import Celebration from "./Celebration";
import styles from "./CelebrationList.module.less";

function CelebrationList() {
    // Mock of celebrations
    const celebrations: ICelebration[] = [
        {
            Id: 0,
            Who: "Jan Novák",
            CelebrationType: CelebrationType.Birthday,
            When: new Date(2025, 10, 5),
            Repeat: Repeat.Yearly,
            Note: "Never forget this one!"
        },
        {
            Id: 4,
            Who: "Táta",
            CelebrationType: CelebrationType.Birthday,
            When: new Date(2025, 10, 14),
            Repeat: Repeat.Yearly,
        },
        {
            Id: 1,
            Who: "Míša",
            CelebrationType: CelebrationType.Birthday,
            When: new Date(2025, 10, 17),
            Repeat: Repeat.Yearly,
            Note: "Never forget this one!"
        },
        {
            Id: 5,
            Who: "Brácha",
            CelebrationType: CelebrationType.Birthday,
            When: new Date(2026, 2, 20),
            Repeat: Repeat.Yearly,
        },
        {
            Id: 3,
            Who: "Mamka",
            CelebrationType: CelebrationType.Birthday,
            When: new Date(2026, 6, 20),
            Repeat: Repeat.Yearly,
        },
        {
            Id: 2,
            Who: "Já + Míša",
            CelebrationType: CelebrationType.Anniversary,
            When: new Date(2026, 9, 7),
            Repeat: Repeat.Yearly,
        },
        {
            Id: 6,
            Who: "Míša",
            CelebrationType: CelebrationType.NameDay,
            When: new Date(2026, 9, 19),
            Repeat: Repeat.Yearly,
        },
    ];

    return (
        <>
            <h2 className="text-center">Upcoming celebrations</h2>
            <div className={styles.celebrationList}>
                { celebrations.map((c) => (
                    <Celebration celebration={c} key={c.Id} />
                ))}
            </div>
        </>
    )
}

export default CelebrationList;
