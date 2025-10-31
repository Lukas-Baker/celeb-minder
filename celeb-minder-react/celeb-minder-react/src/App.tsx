import Banner from "./components/Banner";
import CelebrationForm from "./components/CelebrationForm";
import CelebrationList from "./components/CelebrationList";

function App() {
  return (
    <div className="container">
      <Banner />
      <div className="row">
        <div className="col-4">
          <CelebrationForm />
        </div>
        <div className="col-8">
          <CelebrationList />
        </div>
      </div>
    </div>
  );
}

export default App
