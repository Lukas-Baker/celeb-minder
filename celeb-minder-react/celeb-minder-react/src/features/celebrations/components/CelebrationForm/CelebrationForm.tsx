import DatePicker from "react-datepicker";
import { CelebrationType } from "../../types/CelebrationTypeEnum";
import { Repeat } from "../../types/RepeatEnum";
import AddCelebrationBtn from "../AddCelebrationBtn/AddCelebrationBtn";
import styles from "./CelebrationForm.module.less";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormat } from "../../../../helpers/dateHelpers";
import EditCelebrationBtn from "../EditCelebrationBtn/EditCelebrationBtn";
import CancelEditCelebrationBtn from "../CancelEditCelebrationBtn/CancelEditCelebrationBtn";
import { useCelebrations } from "../../hooks/useCelebrations";

const CelebrationForm = () => {
    const {isEdit, celebration, setCelebration} = useCelebrations();

    let formButtons;
    if (isEdit) {
        formButtons = (
            <>
            <EditCelebrationBtn celebration={celebration} />
            <CancelEditCelebrationBtn />
            </>
        )
    } else {
        formButtons = <AddCelebrationBtn celebration={celebration} />
    }

    return (
        <div className={`mb-4 ${styles.form}`}>
            <h2 className="text-center">{isEdit ? "Edit celebration" : "New celebration"}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputWho" className="form-label">Who</label>
                    <input value={celebration.Who} onChange={e => setCelebration({ ...celebration, Who: e.target.value })}
                        id="inputWho" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCelebrationType" className="form-label">Celebration type</label>
                    <select value={celebration.CelebrationType} onChange={e => setCelebration({ ...celebration, CelebrationType: parseInt(e.target.value) })}
                        id="inputCelebrationType" className="form-control">
                        {
                            Object.entries(CelebrationType).map(([label, value]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputWhen" className="form-label">When</label>
                    <DatePicker dateFormat={dateFormat} id="inputWhen" className="form-control" selected={celebration.When} onChange={(date) => setCelebration({ ...celebration, When: date ?? new Date() })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputRepeat" className="form-label">Repeat</label>
                    <select value={celebration.Repeat} onChange={e => setCelebration({ ...celebration, Repeat: parseInt(e.target.value) })}
                        id="inputRepeat" className="form-control">
                        {
                            Object.entries(Repeat).map(([label, value]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="noteInput" className="form-label">Note</label>
                    <textarea value={celebration.Note} onChange={e => setCelebration({ ...celebration, Note: e.target.value })}
                        id="noteInput" className="form-control" />
                </div>
                <div className="text-center">
                    {formButtons}
                </div>
            </form>
        </div>
    );
}

export default CelebrationForm;
