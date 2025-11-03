import Banner from "./components/Banner/Banner";
import CelebrationForm from "./components/CelebrationForm/CelebrationForm";
import CelebrationList from "./components/CelebrationList/CelebrationList";
import Footer from "./components/Footer/Footer";
import "./styles/global.less";
import "./styles/icons.less";

function App() {
  return (
    <div id="Celebminder" className="container">
      <div className="row">
        <Banner />
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <CelebrationForm />
        </div>
        <div className="col-12 col-lg-6">
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
