import { MATCHING_COUNT } from "./number";

export const PROFIT_PER_MATCHING = {
  [MATCHING_COUNT.three]: 5000,
  [MATCHING_COUNT.four]: 50000,
  [MATCHING_COUNT.five]: 1500000,
  bonus: 30000000,
  [MATCHING_COUNT.six]: 2000000000,
};

export const PROFIT_PER_MATCHING_STRING = {
  [MATCHING_COUNT.three]: "5,000원",
  [MATCHING_COUNT.four]: "50,000원",
  [MATCHING_COUNT.five]: "1,500,000원",
  bonus: "30,000,000원",
  [MATCHING_COUNT.six]: "2,000,000,000원",
};
