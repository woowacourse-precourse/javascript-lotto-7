import { PRIZES } from "./constants.js";

export function calculateTotalPrize(counts) {
  return (
    counts[3] * PRIZES[3] +
    counts[4] * PRIZES[4] +
    counts[5] * PRIZES[5] +
    counts["5_bonus"] * PRIZES["5_bonus"] +
    counts[6] * PRIZES[6]
  );
}
