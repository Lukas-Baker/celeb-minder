import { useContext } from "react";
import { CelebrationContext } from "../contexts/CelebrationContext";

export function useCelebrations() {
  const ctx = useContext(CelebrationContext);
  if (!ctx) {
    throw new Error("useCelebration must be used inside a CelebrationProvider");
  }
  return ctx;
}
