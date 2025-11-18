import DatePicker from "react-datepicker";
import { CelebrationType } from "../../types/CelebrationTypeEnum";
import type { ICelebration } from "../../types/ICelebration";
import { Repeat } from "../../types/RepeatEnum";
import AddCelebrationBtn from "../AddCelebrationBtn/AddCelebrationBtn";
import styles from "./CelebrationForm.module.less";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormat } from "../../helpers/dateHelpers";

interface CelebrationFormProps {
  celebration: ICelebration;
  setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>;
  setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;
}

const CelebrationForm: React.FC<CelebrationFormProps> = ({celebration, setCelebration, setCelebrations}) => {
    return (
        <div className={`mb-4 ${styles.form}`}>
            <h2 className="text-center">New celebration</h2>
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
                    <AddCelebrationBtn celebration={celebration} setCelebrations={setCelebrations} />
                </div>
            </form>
        </div>
    );
}

export default CelebrationForm;
