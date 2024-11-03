import { inputWinningNumbers, inputBonusNumber } from './view/InputReader.js';
import { printEmptyLine } from './view/OutputPrinter.js';
import { createWinningNumberValidator } from './validate/ValidatorCreator.js';
import { retryIfOccurredError } from './RetryHelper.js';

const winningNumberValidator = createWinningNumberValidator();

const splitWinningNumbers = (winningNumbers) => winningNumbers.split(',').map((number) => number.replaceAll(' ', ''));

const getWinningNumbers = async () => {
  const rawWinningNumbers = await inputWinningNumbers();
  winningNumberValidator.validateRawWinningNumber(rawWinningNumbers);

  const winningNumbers = splitWinningNumbers(rawWinningNumbers);
  winningNumberValidator.validateWinningNumbers(winningNumbers);

  return winningNumbers.map(Number);
}

const getBonusNumber = async (winningNumbers) => {
  const bonusNumber = await inputBonusNumber();
  winningNumberValidator.validateBonusNumber(winningNumbers, bonusNumber);
  return Number(bonusNumber);
}

export async function getWinningLottoNumbersAndBonusNumber() {
  const winningNumbers = await retryIfOccurredError(getWinningNumbers);
  printEmptyLine();

  const bonusNumber = await retryIfOccurredError(getBonusNumber, winningNumbers);
  printEmptyLine();

  return { winningNumbers, bonusNumber };
}