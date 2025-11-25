import type { ICelebration } from "./ICelebration";

export type ICelebrationState = {
  isEdit: boolean;
  celebration: ICelebration;
  celebrations: ICelebration[];

  setCelebrationFromForm: (celebration: ICelebration) => void;
  setToCreateMode: () => void;
  loadCelebrationToForm: (editedCelebration: ICelebration) => void;
  addCelebration: (newCelebration: ICelebration) => void;
  editCelebration: (editedCelebration: ICelebration) => void;
  deleteCelebration: (celebrationToDelete: ICelebration) => void;
};
