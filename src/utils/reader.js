import InputView from '../view/InputView.js';
import OuputView from '../view/OutputView.js';
import { validateInputMoney } from './validate.js';

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
