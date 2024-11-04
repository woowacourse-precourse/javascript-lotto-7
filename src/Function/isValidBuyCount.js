import { BUY_ERROR, ENTER, MONEY_UNIT, ZERO } from "../Constant.js";

export const isValidBuyCount = (buyCount) => {
  if (isNaN(buyCount)) {
    throw new Error(BUY_ERROR + ENTER);
  }
  if (buyCount <= ZERO) {
    throw new Error(BUY_ERROR + ENTER);
  }
  if (buyCount % MONEY_UNIT != ZERO) {
    throw new Error(BUY_ERROR + ENTER);
  }
};
