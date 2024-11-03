import InputView from '../view/InputView.js';
import { validateBonusNumber, validateInputMoney, validateLottoNumbers } from './validate.js';

export const readAndValidateMoney = async () => {
  const inputMoney = await InputView.readMoney();
  validateInputMoney(inputMoney);

  return Number(inputMoney);
};

export const readAndValidateWinningNumber = async () => {
  const inputWinningNumber = await InputView.readWinningNumber();
  const winningNumber = inputWinningNumber.split(',');
  validateLottoNumbers(winningNumber);

  return winningNumber.map(Number);
};

export const readAndValidateBonusNumber = async (winningNumber) => {
  const inputBonusNumber = await InputView.readBonusNumber();
  validateBonusNumber(winningNumber, inputBonusNumber);

  return Number(inputBonusNumber);
};
