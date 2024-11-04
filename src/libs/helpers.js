import { CONFIG, ERROR_MESSAGE, INFO_MESSAGE } from "./constants.js";
import LottoValidator from "./validator.js";
import { LottoError } from "./errors.js";
import { getInput, printResult } from "./utils.js";

export async function getLottoPurchaseCountByAmountInput() {
  try {
    const amount = await getInput(INFO_MESSAGE.PURCHASE_AMOUNT);
    LottoValidator.validateEmptyInput(amount);
    LottoValidator.validateNumberType(amount);
    return calculateAmount(amount);
  } catch (error) {
    printResult(error.message);
    return getLottoPurchaseCountByAmountInput();
  }
}

export function calculateAmount(amount) {
  const dividedAmount = amount / CONFIG.DEFAULT_AMOUNT_UNIT;
  if (amount % CONFIG.DEFAULT_AMOUNT_UNIT !== 0) {
    throw new LottoError(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  }
  return dividedAmount;
}
