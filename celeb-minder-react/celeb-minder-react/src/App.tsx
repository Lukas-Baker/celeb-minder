import Banner from "./components/Banner";
import CelebrationForm from "./components/CelebrationForm";
import CelebrationList from "./components/CelebrationList";
import Footer from "./components/Footer";
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
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App
