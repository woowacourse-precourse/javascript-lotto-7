import { USER_PROMPT_MESSAGES } from '../constants/constants.js';
import { promptUserInput, printMessage } from './console.js';
import validateAmount from '../validations/purchase-amount.js';

const { GET_PURCHASE_AMOUNT } = USER_PROMPT_MESSAGES;

const promptUserAmount = () => {
  return promptUserInput(GET_PURCHASE_AMOUNT);
};

const getPurchaseAmount = async () => {
  while (true) {
    try {
      const amount = await promptUserAmount();

      const validatedAmount = validateAmount(amount);

      return validatedAmount;
    } catch (error) {
      printMessage(error.message);
    }
  }
};

export default getPurchaseAmount;
