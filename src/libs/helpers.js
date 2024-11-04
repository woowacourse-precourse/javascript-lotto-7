import Lotto from "../Lotto.js";
import { CONFIG, ERROR_MESSAGE, INFO_MESSAGE, WINNER_LOTTO_NUMBER_DELIMITER } from "./constants.js";
import { LottoError } from "./errors.js";
import { getInput, printResult } from "./utils.js";
import { validateEmptyInput, validateLottoNumber, validateNumberType } from "./validate.js";

export async function getLottoPurchaseCountByAmountInput() {
  try {
    const amount = await getInput(INFO_MESSAGE.PURCHASE_AMOUNT);
    validateEmptyInput(amount);
    validateNumberType(amount);
    return calculateAmount(amount);
  } catch (error) {
    printResult(error.message);
    await getLottoPurchaseCountByAmountInput();
  }
}

export function calculateAmount(amount) {
  const dividedAmount = amount / CONFIG.DEFAULT_AMOUNT_UNIT;
  if (amount % CONFIG.DEFAULT_AMOUNT_UNIT !== 0) {
    throw new LottoError(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  }
  return dividedAmount;
}

export async function getValidateWinnerNumbers() {
  try {
    const winnerLottoNumbersInput = await getInput(INFO_MESSAGE.WINNER_LOTTO_NUMBERS_INPUT);
    validateEmptyInput(winnerLottoNumbersInput);
    const winnerLottoNumbers = winnerLottoNumbersInput.split(WINNER_LOTTO_NUMBER_DELIMITER);
    return new Lotto(winnerLottoNumbers);
  } catch (error) {
    printResult(error.message);
    await getValidateWinnerNumbers();
  }
}

export async function getValidateBonusNumbers() {
  try {
    const bonusNumber = await getInput(INFO_MESSAGE.BONUS_NUMBERS_INPUT);
    validateEmptyInput(bonusNumber);
    validateNumberType(bonusNumber);
    return validateLottoNumber(bonusNumber);
  } catch (error) {
    printResult(error.message);
    await getValidateBonusNumbers();
  }
}
