import PriceValidator from '../PriceValidator.js';
import getUserInput from './getUserInput.js';
import printOutput from './printOutput.js';
import { INPUT_MESSAGE } from '../constants/inputOutputMessages.js';

const validateInputPrice = async () => {
  while (true) {
    try {
      const inputPrice = await getUserInput(INPUT_MESSAGE.PURCHASE_PRICE);
      const price = PriceValidator.validatePrice(inputPrice);
      return price;
    } catch (error) {
      printOutput(error);
    }
  }
};

export default validateInputPrice;
