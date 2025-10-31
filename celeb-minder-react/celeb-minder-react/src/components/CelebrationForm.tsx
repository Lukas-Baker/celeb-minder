import { CelebrationType } from "../types/CelebrationTypeEnum";
import { Repeat } from "../types/RepeatEnum";
import AddCelebrationBtn from "./AddCelebrationBtn";

function CelebrationForm() {
    return (
        <div>
            <h2 className="text-center">New celebration</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputWho" className="form-label">Who</label>
                    <input id="inputWho" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCelebrationType" className="form-label">Celebration type</label>
                    <select id="inputCelebrationType" className="form-control">
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
                    <input id="inputWhen" type="date" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputRepeat" className="form-label">Repeat</label>
                    <select id="inputRepeat" className="form-control">
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
                    <textarea id="noteInput" className="form-control" />
                </div>
                <div className="text-center">
                    <AddCelebrationBtn />
                </div>
            </form>
        </div>
    );
}

export default CelebrationForm;