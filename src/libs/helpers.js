import WinningLotto from "../models/WinningLotto.js";
import { CONFIG, ERROR_MESSAGE, INFO_MESSAGE, WINNER_LOTTO_NUMBER_DELIMITER } from "./constants.js";
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

export async function getValidatedWinningNumbers() {
  try {
    const winningNumbersInput = await getInput(INFO_MESSAGE.WINNER_LOTTO_NUMBERS_INPUT);
    const winningNumbers = winningNumbersInput.split(WINNER_LOTTO_NUMBER_DELIMITER).map(Number);

    LottoValidator.validateLottoNumberLength(winningNumbers);
    LottoValidator.validateUniqueNumbers(winningNumbers);
    LottoValidator.validateArrayHasNoEmpty(winningNumbers);
    LottoValidator.validateArrayHasNumberType(winningNumbers);

    return winningNumbers;
  } catch (error) {
    printResult(error.message);
    return getValidatedWinningNumbers();
  }
}

export async function getValidatedBonusNumber(winningNumbers) {
  try {
    const bonusNumberInput = await getInput(INFO_MESSAGE.BONUS_NUMBERS_INPUT);
    const bonusNumber = Number(bonusNumberInput);

    LottoValidator.validateBonusNumber(winningNumbers, bonusNumber);

    return bonusNumber;
  } catch (error) {
    printResult(error.message);
    return getValidatedBonusNumber(winningNumbers);
  }
}

export async function createWinningLotto() {
  const winningNumbers = await getValidatedWinningNumbers();
  const bonusNumber = await getValidatedBonusNumber(winningNumbers);

  return new WinningLotto(winningNumbers, bonusNumber);
}
