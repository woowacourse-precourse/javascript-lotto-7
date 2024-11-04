import deepFreeze from "./utils/deepFreeze.js";

const LOTTO_SPLITTER = ",";

const LOTTO_CONFIG = deepFreeze({
  PRICE: 1000,
  NUMBER: {
    MIN: 1,
    MAX: 45,
  },
  COUNT: 6,
});

export { LOTTO_SPLITTER, LOTTO_CONFIG };
