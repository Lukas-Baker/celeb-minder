import useCelebrationsState from "../../hooks/useCelebrationsState";
import { CelebrationContext } from "../../contexts/CelebrationContext";

export function CelebrationProvider({ children }: React.PropsWithChildren) {
  const value = useCelebrationsState();
  return (
    <CelebrationContext.Provider value={value}>
      {children}
    </CelebrationContext.Provider>
  );
}
