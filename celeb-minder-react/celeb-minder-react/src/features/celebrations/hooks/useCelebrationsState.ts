import { useState } from "react";
import { DefaultCelebration, type ICelebration } from "../types/ICelebration";
import { sortCelebrationsByDate } from "../../../helpers/sortHelpers";
import { CelebrationType } from "../types/CelebrationTypeEnum";
import { Repeat } from "../types/RepeatEnum";

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

const useCelebrationsState = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [celebration, setCelebration] = useState(DefaultCelebration);
  const [celebrations, setCelebrations] = useState(
    sortCelebrationsByDate(celebrationsMock)
  );

  const setToCreateMode = () => {
    setCelebration(DefaultCelebration);
    setIsEdit(false);
  };

  const loadCelebrationToForm = (editedCelebration: ICelebration) => {
    setCelebration(editedCelebration);
    setIsEdit(true);
  };

  const addCelebration = (newCelebration: ICelebration) => {
    setCelebrations(prev => {
      newCelebration.Id =
        prev.length !== 0 ? Math.max(...prev.map(c => c.Id)) + 1 : 1;
      return sortCelebrationsByDate([...prev, newCelebration]);
    });
  };

  const editCelebration = (editedCelebration: ICelebration) => {
    setCelebrations(prev => {
      const updated = prev.map(c =>
        c.Id === celebration.Id ? editedCelebration : c
      );
      return sortCelebrationsByDate(updated);
    });
  };

  const deleteCelebration = (toDelete: ICelebration) => {
    setCelebrations(prev => prev.filter(c => c.Id !== toDelete.Id));
  };

  return {
    isEdit,
    celebration,
    celebrations,
    setIsEdit,
    setCelebration,
    setCelebrations,
    setToCreateMode,
    loadCelebrationToForm,
    addCelebration,
    editCelebration,
    deleteCelebration,
  };
}

export default useCelebrationsState;