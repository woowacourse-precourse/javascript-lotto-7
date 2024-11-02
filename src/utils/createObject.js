import validation from '../validation.js';
import retry from './retry.js';
import { inputMethod } from './ioMethod.js';

const createObject = {
  createPurchaseAmount: async function () {
    const validationCondition = Object.values(validation.purchaseAmount);
    return await retry(inputMethod.inputPurchaseAmount, validationCondition);
  },
};

export default createObject;
