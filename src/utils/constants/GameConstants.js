import { createConstants } from "./createConstants.js";

export const GAME_CONSTANTS = createConstants({
  PRICE: 1000,
  NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
});

export const LOTTO_RANK = createConstants({
  FIRST: {
    matchCount: 6,
    prize: 2_000_000_000,
    message: "6개 일치 (2,000,000,000원)",
    hasBonus: false,
  },
  SECOND: {
    matchCount: 5,
    prize: 30_000_000,
    message: "5개 일치, 보너스 볼 일치 (30,000,000원)",
    hasBonus: true,
  },
  THIRD: {
    matchCount: 5,
    prize: 1_500_000,
    message: "5개 일치 (1,500,000원)",
    hasBonus: false,
  },
  FOURTH: {
    matchCount: 4,
    prize: 50_000,
    message: "4개 일치 (50,000원)",
    hasBonus: false,
  },
  FIFTH: {
    matchCount: 3,
    prize: 5_000,
    message: "3개 일치 (5,000원)",
    hasBonus: false,
  },
});
