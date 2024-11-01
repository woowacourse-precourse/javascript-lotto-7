import InputView from '../view/InputView.js';
import OuputView from '../view/OutputView.js';
import { validateBonusNumber, validateInputMoney, validateLottoNumbers } from './validate.js';

export const readAndValidateMoney = async () => {
  const inputMoney = await InputView.readMoney();

  try {
    validateInputMoney(inputMoney);
  } catch (error) {
    OuputView.printMessage(error.message);
    await readAndValidateMoney();
  }

  return Number(inputMoney);
};

export const readAndValidateWinningNumber = async () => {
  const inputWinningNumber = await InputView.readWinningNumber();
  const winningNumber = inputWinningNumber.split(',');

  try {
    validateLottoNumbers(winningNumber);
  } catch (error) {
    OuputView.printMessage(error.message);
    await readAndValidateWinningNumber();
  }

  return winningNumber.map(Number);
};

export const readAndValidateBonusNumber = async (winningNumber) => {
  const inputBonusNumber = await InputView.readBonusNumber();

  try {
    validateBonusNumber(winningNumber, inputBonusNumber);
  } catch (error) {
    OuputView.printMessage(error.message);
    await readAndValidateBonusNumber();
  }

  return Number(inputBonusNumber);
};
