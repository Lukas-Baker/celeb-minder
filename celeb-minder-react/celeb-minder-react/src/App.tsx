import { useState } from "react";
import Banner from "./features/banner/Banner";
import CelebrationForm from "./features/celebrations/components/CelebrationForm/CelebrationForm";
import CelebrationList from "./features/celebrations/components/CelebrationList/CelebrationList";
import Footer from "./features/footer/Footer";
import "./styles/global.less";
import "./styles/icons.less";
import { DefaultCelebration, type ICelebration } from "./features/celebrations/types/ICelebration";
import { CelebrationType } from "./features/celebrations/types/CelebrationTypeEnum";
import { Repeat } from "./features/celebrations/types/RepeatEnum";
import { sortCelebrationsByDate } from "./helpers/sortHelpers";
import CelebrationStateContext from "./features/celebrations/contexts/CelebrationStateContext";

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
  const [celebration, setCelebration] = useState<ICelebration>(DefaultCelebration);
  const [celebrations, setCelebrations] = useState<ICelebration[]>(sortCelebrationsByDate(celebrationsMock));

  const setToCreateMode = () => {
    setCelebration(DefaultCelebration);
    setIsEdit(false);
  }

  const loadCelebrationToForm = (editedCelebration: ICelebration) => {
    setCelebration(editedCelebration);
    setIsEdit(true);
  }

  const addCelebration = (newCelebration: ICelebration) => {
      setCelebrations((celebrations) => {
        // TBD LP: Id generation with API should be done differently
        celebration.Id = celebrations.length !== 0 ? Math.max(...celebrations.map(c => c.Id)) + 1 : 1;
        const newCelebrations = [...celebrations, newCelebration];
        return sortCelebrationsByDate(newCelebrations);
      });
  }

  const editCelebration = (editedCelebration: ICelebration) => {
    setCelebrations(celebrations => {
        const newCelebrations = celebrations.map(c => c.Id == celebration.Id ? editedCelebration : c);
        return sortCelebrationsByDate(newCelebrations);
    });
  }

  const deleteCelebration = (celebrationToDelete: ICelebration) => {
    setCelebrations(celebrations => celebrations.filter(c => c.Id !== celebrationToDelete.Id));
  }

  return (
    <div id="Celebminder" className="container">
      <div className="row">
        <Banner />
      </div>
      <div className="row">
        <CelebrationStateContext.Provider value={{isEdit, loadCelebrationToForm: loadCelebrationToForm, setToCreateMode, addCelebration, editCelebration, deleteCelebration}}>
          <div className="col-12 col-lg-6">
            <CelebrationForm celebration={celebration} setCelebration={setCelebration} />
          </div>
          <div className="col-12 col-lg-6">
            <CelebrationList celebrations={celebrations} />
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
