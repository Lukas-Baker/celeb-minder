import DatePicker from "react-datepicker";
import { CelebrationType, getCelebrationName } from "../../types/CelebrationTypeEnum";
import { Repeat } from "../../types/RepeatEnum";
import AddCelebrationBtn from "../AddCelebrationBtn/AddCelebrationBtn";
import styles from "./CelebrationForm.module.less";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormat, dateToString } from "../../../../helpers/dateHelpers";
import EditCelebrationBtn from "../EditCelebrationBtn/EditCelebrationBtn";
import CancelEditCelebrationBtn from "../CancelEditCelebrationBtn/CancelEditCelebrationBtn";
import { useCelebrations } from "../../hooks/useCelebrations";
import { DefaultCelebration } from "../../types/ICelebration";
import { useState } from "react";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

const CelebrationForm = () => {
    // states
    const {isEdit, celebration, setCelebrationFromForm} = useCelebrations();
    const [who, setWho] = useState<string>(DefaultCelebration.Who);
    const [whoValid, setWhoValid] = useState<boolean|null>(null);
    const [celebrationType, setCelebrationType] = useState<string>("");
    const [celebrationTypeValid, setCelebrationTypeValid] = useState<boolean|null>(null);
    const [when, setWhen] = useState<Date|null>(null);
    const [whenValid, setWhenValid] = useState<boolean|null>(null);

    // helper methods
    const getValidationClass = (valid: boolean|null) => {
        if (valid === null) {
            return "";
        } else if (valid) {
            return "is-valid";
        } else {
            return "is-invalid";
        }
    }

    // validation methods
    const validateAndSetWho = (who: string) => {
        setWho(who);
        setWhoValid(who.length > 0);
    };

    const validateAndSetCelebrationType = (celebrationType: string) => {
        setCelebrationType(celebrationType);
        setCelebrationTypeValid(celebrationType !== "");
    }

    const validateAndSetWhen = (when: Date|null) => {
        setWhen(when);
        setWhenValid(when !== null)
    }

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
                    <input value={who} onChange={e => validateAndSetWho(e.target.value)}
                        id="inputWho" type="text" className={`form-control ${getValidationClass(whoValid)}`} />
                    <ValidationMessage isValid={whoValid}
                                       validMessage={<>Looks like you are about to make <strong>{who}</strong> happy!</>}
                                       invalidMessage={<>Oooops! You forgot to tell me <strong>who</strong> celebrates.</>}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCelebrationType" className="form-label">Celebration type</label>
                    <select value={celebrationType ?? DefaultCelebration.CelebrationType}
                            onChange={e => validateAndSetCelebrationType(e.target.value)}
                            id="inputCelebrationType"
                            className={`form-control ${getValidationClass(celebrationTypeValid)}`}>
                    {
                        Object.entries(CelebrationType).map(([, value]) => (
                        <option key={value === null ? -1 : value} value={value ?? ""}>
                            {getCelebrationName(value)}
                        </option>
                    ))}
                    </select>
                    <ValidationMessage isValid={celebrationTypeValid}
                                       validMessage={
                                           <>Do you have an idea what to give <strong>{who === "" ? "?" : who}</strong> to
                                           <strong> {celebrationType && getCelebrationName(parseInt(celebrationType))}</strong>?</>
                                       }
                                       invalidMessage={<>I would like to know what kind of <strong>celebration type</strong> it is! Just tell me...</>} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputWhen" className="form-label">When</label>
                    <DatePicker dateFormat={dateFormat}
                                id="inputWhen"
                                className={`form-control ${getValidationClass(whenValid)}`}
                                selected={when}
                                onChange={(date) => validateAndSetWhen(date)} />
                    <ValidationMessage isValid={whenValid}
                                       validMessage={
                                        <>So it's happening on <strong>{dateToString(when)}</strong>! You know what I mean...
                                        <strong> {celebrationType === "" ? "?" : getCelebrationName(parseInt(celebrationType)) }</strong>
                                        ...<strong>{who === "" ? "?" : who}</strong></>
                                       }
                                       invalidMessage={
                                        <>Cmoooon! I need to know <strong>when</strong> the
                                        <strong> {celebrationType === "" ? "?" : getCelebrationName(parseInt(celebrationType)) }</strong> happens.</>
                                       } />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputRepeat" className="form-label">Repeat</label>
                    <select value={celebration.Repeat} onChange={e => setCelebrationFromForm({ ...celebration, Repeat: parseInt(e.target.value) })}
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
                    <textarea value={celebration.Note} onChange={e => setCelebrationFromForm({ ...celebration, Note: e.target.value })}
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
