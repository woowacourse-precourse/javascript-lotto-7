import { Console } from '@woowacourse/mission-utils';
import { INPUT_TEXTS, ERROR_TEXTS } from './Constants.js';

class InputManagement {
  #availablePublicationCount = 0;

  constructor() {}

  getPublicationCount() {
    return this.#availablePublicationCount;
  }

  #validationPA(purchaseAmount) {
    if(Number.isNaN(Number(purchaseAmount))) {
      throw new Error(ERROR_TEXTS.NOT_A_NUMBER_PURCHASE_AMOUNT);
    }

    if(purchaseAmount === '') {
      throw new Error(ERROR_TEXTS.NOT_A_BLANK_PURCHASE_AMOUNT);
    }

    if(purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_TEXTS.NOT_DIVIDE_1000_PURCHASE_AMOUNT);
    }
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_TEXTS.PURCHASE_AMOUNT);
    this.#validationPA(purchaseAmount);
    
    this.#availablePublicationCount = purchaseAmount/1000;
  }

  getWinningNumbers() {

  }

  getBonusNumber() {
    
  }
}

export default InputManagement;