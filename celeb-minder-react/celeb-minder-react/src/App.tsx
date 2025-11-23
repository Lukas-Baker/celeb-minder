import Banner from "./features/banner/Banner";
import Footer from "./features/footer/Footer";
import "./styles/global.less";
import "./styles/icons.less";
import CelebrationSection from "./features/celebrations/components/CelebrationSection/CelebrationSection";

function App() {
  return (
    <div id="Celebminder" className="container">
      <div className="row">
        <Banner />
      </div>
      <div className="row">
        <CelebrationSection />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App
