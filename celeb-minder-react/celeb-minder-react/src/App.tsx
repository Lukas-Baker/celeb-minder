import { useState } from "react";
import Banner from "./components/Banner/Banner";
import CelebrationForm from "./components/CelebrationForm/CelebrationForm";
import CelebrationList from "./components/CelebrationList/CelebrationList";
import Footer from "./components/Footer/Footer";
import "./styles/global.less";
import "./styles/icons.less";
import { NewCelebration, type ICelebration } from "./types/ICelebration";
import { CelebrationType } from "./types/CelebrationTypeEnum";
import { Repeat } from "./types/RepeatEnum";
import { sortCelebrationsByDate } from "./helpers/sortHelpers";
import CelebrationStateContext from "./contexts/CelebrationStateContext";

function App() {
  const celebrationsMock: ICelebration[] = [
      {
          Id: 7,
          Who: "Jan Novák",
          CelebrationType: CelebrationType.Birthday,
          When: new Date(2025, 10, 5),
          Repeat: Repeat.Yearly,
          Note: "Never forget this one!"
      },
      {
          Id: 4,
          Who: "Táta",
          CelebrationType: CelebrationType.Birthday,
          When: new Date(2025, 10, 14),
          Repeat: Repeat.Yearly,
      },
      {
          Id: 1,
          Who: "Míša",
          CelebrationType: CelebrationType.Birthday,
          When: new Date(2025, 10, 17),
          Repeat: Repeat.Yearly,
          Note: "Never forget this one!"
      },
      {
          Id: 5,
          Who: "Brácha",
          CelebrationType: CelebrationType.Birthday,
          When: new Date(2026, 2, 20),
          Repeat: Repeat.Yearly,
      },
      {
          Id: 3,
          Who: "Mamka",
          CelebrationType: CelebrationType.Birthday,
          When: new Date(2026, 6, 20),
          Repeat: Repeat.Yearly,
      },
      {
          Id: 2,
          Who: "Já + Míša",
          CelebrationType: CelebrationType.Anniversary,
          When: new Date(2026, 9, 7),
          Repeat: Repeat.Yearly,
      },
      {
          Id: 6,
          Who: "Míša",
          CelebrationType: CelebrationType.NameDay,
          When: new Date(2026, 9, 19),
          Repeat: Repeat.Yearly,
      },
  ];

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [celebration, setCelebration] = useState<ICelebration>(NewCelebration);
  const [celebrations, setCelebrations] = useState<ICelebration[]>(sortCelebrationsByDate(celebrationsMock));

  return (
    <div id="Celebminder" className="container">
      <div className="row">
        <Banner />
      </div>
      <div className="row">
        <CelebrationStateContext.Provider value={{isEdit, setIsEdit}}>
          <div className="col-12 col-lg-6">
            <CelebrationForm celebration={celebration}
                            setCelebration={setCelebration}
                            setCelebrations={setCelebrations} />
          </div>
          <div className="col-12 col-lg-6">
            <CelebrationList celebrations={celebrations}
                            setCelebration={setCelebration}
                            setCelebrations={setCelebrations} />
          </div>
        </CelebrationStateContext.Provider>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App
