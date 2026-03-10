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
import { DefaultCelebration, type ICelebration } from "../../types/ICelebration";
import { useEffect, useState } from "react";
import ValidationMessage from "../ValidationMessage/ValidationMessage";
import type { ICelebrationFormData } from "../../types/ICelebrationFormData";

const CelebrationForm = () => {
    // states
    const {isEdit, celebration} = useCelebrations();
    const [who, setWho] = useState<string>(DefaultCelebration.Who);
    const [whoValid, setWhoValid] = useState<boolean|null>(null);
    const [celebrationType, setCelebrationType] = useState<string>("");
    const [celebrationTypeValid, setCelebrationTypeValid] = useState<boolean|null>(null);
    const [when, setWhen] = useState<Date|null>(null);
    const [whenValid, setWhenValid] = useState<boolean|null>(null);
    const [repeat, setRepeat] = useState<string>("");
    const [repeatValid, setRepeatValid] = useState<boolean|null>(null);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [note, setNote] = useState<string>("");

    useEffect(() => {
        let isFormValid: boolean = false;

        if (isEdit) {
            isFormValid = (whoValid === true || whoValid === null) &&
                (celebrationTypeValid === true || celebrationTypeValid === null) &&
                (whenValid === true || whenValid === null) &&
                (repeatValid === true || repeatValid === null)
        } else {
            isFormValid = whoValid === true &&
            celebrationTypeValid === true &&
            (whenValid === true || whenValid === null) && // when has a default valid value
            repeatValid === true
        }

        setIsFormValid(
            isFormValid
        );
    }, [whoValid, celebrationTypeValid, whenValid, repeatValid, isEdit]);

    // register the change of celebration from outside and set it to the form when edit
    useEffect(() => {
        setCelebrationToForm(celebration);
    }, [celebration, isEdit]);

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

    const getCelebrationFromForm = () => {
        return {
            Id: celebration.Id,
            Who: who,
            CelebrationType: parseInt(celebrationType),
            When: when!,
            Repeat: parseInt(repeat),
            Note: note,
        }
    }

    const setCelebrationToForm = (celebration: ICelebration) => {
        setWho(celebration.Who);
        setWhoValid(null);
        setCelebrationType(celebration.CelebrationType?.toString() ?? "");
        setCelebrationTypeValid(null);
        setWhen(celebration.When);
        setWhenValid(null);
        setRepeat(celebration.Repeat?.toString() ?? "");
        setRepeatValid(null);
        setNote(celebration.Note ?? "");
    }

    const getCelebrationFormData = (): ICelebrationFormData => {
        return {
                celebration: getCelebrationFromForm(),
                isValid: isFormValid,
                setCelebrationToForm
        };
    }

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
        setWhenValid(when !== null);
    }

    const validateAndSetRepeat = (repeat: string) => {
        setRepeat(repeat);
        setRepeatValid(repeat !== "");
    }

    // make from valid = null -> valid = false
    const forceValidation = () => {
        setWhoValid(whoValid === true ? true : false);
        setCelebrationTypeValid(celebrationTypeValid === true ? true : false);
        setRepeatValid(repeatValid === true ? true : false);
    }

    let formButtons;
    if (isEdit) {
        formButtons = (
            <>
            <EditCelebrationBtn getCelebrationFormData={getCelebrationFormData} />
            <CancelEditCelebrationBtn />
            </>
        )
    } else {
        formButtons = <AddCelebrationBtn getCelebrationFormData={getCelebrationFormData} forceValidation={forceValidation}  />
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
                    <select value={celebrationType}
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
                                           <>Do you have any idea what to give <strong>{who === "" ? "?" : who}</strong> to
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
                                        {" ... "}<strong>{who === "" ? "?" : who}</strong></>
                                       }
                                       invalidMessage={
                                        <>Cmoooon! I need to know <strong>when</strong> the
                                        <strong> {celebrationType === "" ? "?" : getCelebrationName(parseInt(celebrationType)) }</strong> happens.</>
                                       } />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputRepeat" className="form-label">Repeat</label>
                    <select value={repeat}
                            onChange={e => validateAndSetRepeat(e.target.value)}
                            className={`form-control ${getValidationClass(repeatValid)}`}
                            id="inputRepeat">
                        {
                            Object.entries(Repeat).map(([label, value]) => (
                            <option key={value === null ? -1 : value} value={value ?? ""}>
                                {value === null ? "-" : label}
                            </option>
                        ))}
                    </select>
                    <ValidationMessage isValid={repeatValid}
                                       validMessage={<>I am going to remember this!</>}
                                       invalidMessage={<>Bzzp bzzzp, information about <strong>Repeat</strong> is bzzp ... mandatory.</>}
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="noteInput" className="form-label">Note</label>
                    <textarea value={note} onChange={e => setNote(e.target.value)}
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
