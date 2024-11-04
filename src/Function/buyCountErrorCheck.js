import { BUY_ERROR, ENTER, MONEY_UNIT, ZERO } from "../Constant.js";

export const buyCountErrorCheck = (buyCount) => {
  if (isNaN(buyCount) || buyCount <= ZERO || buyCount % MONEY_UNIT != ZERO) {
    throw new Error(BUY_ERROR + ENTER);
  }
};
