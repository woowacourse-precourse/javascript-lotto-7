import { CONFIG, ERROR_MESSAGE, INFO_MESSAGE } from "./constants.js";
import { LottoError } from "./errors.js";
import { getInput, printResult } from "./utils.js";
import { validateEmptyInput, validateNumberType } from "./validate.js";

export async function getLottoPurchaseCountByAmountInput() {
  try {
    const amount = await getInput(INFO_MESSAGE.PURCHASE_AMOUNT);
    validateEmptyInput(amount);
    validateNumberType(amount);
    return calculateAmount(amount);
  } catch (error) {
    printResult(error.message);
    getLottoPurchaseCountByAmountInput();
  }
}

export function calculateAmount(amount) {
  const dividedAmount = amount / CONFIG.DEFAULT_AMOUNT_UNIT;
  if (amount % CONFIG.DEFAULT_AMOUNT_UNIT !== 0) {
    throw new LottoError(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  }
  return dividedAmount;
}
