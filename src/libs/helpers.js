import WinningLotto from "../models/WinningLotto.js";
import Lotto from "../models/Lotto.js";
import { CONFIG, ERROR_MESSAGE, INFO_MESSAGE, PRIZE_TABLE, WINNER_LOTTO_NUMBER_DELIMITER } from "./constants.js";
import LottoValidator from "./validator.js";
import { LottoError } from "./errors.js";
import { getInput, pickUniqueNumbersInRange, printResult } from "./utils.js";

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
    LottoValidator.validateWinningNumbers(winningNumbers);
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

export function createLottoNumbers(lottoAmount) {
  return Array.from({ length: lottoAmount }, (_) => {
    const lotto = pickUniqueNumbersInRange(CONFIG.MIN_LOTTO_NUMBER, CONFIG.MAX_LOTTO_NUMBER, CONFIG.LOTTO_COUNT).sort(
      (a, b) => a - b
    );
    return new Lotto(lotto);
  });
}

export function calculateProfitRate(results, amount) {
  const totalPrize = PRIZE_TABLE.reduce((acc, { matchCount, bonusMatch, prize }) => {
    const count = results.filter(
      (result) => result.matchCount === matchCount && (!bonusMatch || result.bonusMatch)
    ).length;
    return acc + prize * count;
  }, 0);
  return (totalPrize / (amount * CONFIG.DEFAULT_AMOUNT_UNIT)) * 100;
}
