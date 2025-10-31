import type { ICelebration } from "../types/ICelebration";

interface Props {
    celebration: ICelebration,
}

function Celebration({celebration}: Props) {
    return (
        <div>
            <p>Id: {celebration.Id}</p>
        </div>
    )
}

export default Celebration;
