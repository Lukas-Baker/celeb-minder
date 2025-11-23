import type { ICelebration } from "./ICelebration";

export type ICelebrationState = {
  isEdit: boolean;
  celebration: ICelebration;
  celebrations: ICelebration[];

  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setCelebration: React.Dispatch<React.SetStateAction<ICelebration>>;
  setCelebrations: React.Dispatch<React.SetStateAction<ICelebration[]>>;

  setToCreateMode: () => void;
  loadCelebrationToForm: (editedCelebration: ICelebration) => void;
  addCelebration: (newCelebration: ICelebration) => void;
  editCelebration: (editedCelebration: ICelebration) => void;
  deleteCelebration: (celebrationToDelete: ICelebration) => void;
};
