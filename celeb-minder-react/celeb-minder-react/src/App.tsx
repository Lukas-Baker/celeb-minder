import Banner from "./components/Banner";
import CelebrationForm from "./components/CelebrationForm";
import CelebrationList from "./components/CelebrationList";
import "./styles/icons.less";

function App() {
  return (
    <div className="container">
      <Banner />
      <div className="row">
        <div className="col-12 col-lg-4">
          <CelebrationForm />
        </div>
        <div className="col-12 col-lg-8">
          <CelebrationList />
        </div>
      </div>
    </div>
  );
}

export default App
