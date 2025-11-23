import CelebrationForm from "../CelebrationForm/CelebrationForm";
import CelebrationList from "../CelebrationList/CelebrationList";
import { CelebrationProvider } from "../CelebrationProvider/CelebrationProvider";

const CelebrationSection = () => {
    return (
    <CelebrationProvider>
        <div className="col-12 col-lg-6">
            <CelebrationForm />
        </div>
        <div className="col-12 col-lg-6">
            <CelebrationList />
        </div>
    </CelebrationProvider>
    );
}

export default CelebrationSection;