import Banner from "./components/Banner";
import CelebrationForm from "./components/CelebrationForm";
import UpcomingCelebrations from "./components/UpcomingCelebrations";

function App() {
  return (
    <div className="container">
      <Banner />
      <div className="row">
        <div className="col-4">
          <CelebrationForm />
        </div>
        <div className="col-8">
          <UpcomingCelebrations />
        </div>
      </div>
    </div>
  );
}

export default App
