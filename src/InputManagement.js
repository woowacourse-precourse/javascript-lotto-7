import { Console } from '@woowacourse/mission-utils';
import { INPUT_TEXTS, ERROR_TEXTS } from './Constants.js';

class InputManagement {
  #availablePublicationCount = 0;
  #winningNumbers = [];

  constructor() {}

  getPublicationCount() {
    return this.#availablePublicationCount;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
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

  #validationWN(winningNumbers) {
    if(winningNumbers === '') {
      throw new Error(ERROR_TEXTS.NOT_A_BLANK_WINNING_NUMBER);
    }

    const _winningNumbers = winningNumbers.split(',').map((element) => {
      return Number(element);
    });

    if(_winningNumbers.length != 6) {
      throw new Error(ERROR_TEXTS.OUT_OF_COUNT_WINNING_NUMBER);
    }

    if(_winningNumbers.some(element => Number.isNaN(element))) {
      throw new Error(ERROR_TEXTS.NOT_A_NUMBER_WINNING_NUMBER);
    }

    if(_winningNumbers.some(element => element < 1 || element > 45)) {
      throw new Error(ERROR_TEXTS.OUT_OF_RANGE_WINNING_NUMBER);
    }

    if(_winningNumbers.some(element => element % 1 !== 0)) {
      throw new Error(ERROR_TEXTS.NOT_A_INT_WINNING_NUMBER);
    }

    const checkDuplicationArr = new Set(_winningNumbers);
    if(checkDuplicationArr.size !== _winningNumbers.length) {
      throw new Error(ERROR_TEXTS.NOT_A_DUPLICATION_WINNING_NUMBER);
    }

    _winningNumbers.sort((a, b) => {
      return a - b;
    });
    
    return _winningNumbers;
  }

  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_TEXTS.PURCHASE_AMOUNT);
    this.#validationPA(purchaseAmount);
    
    this.#availablePublicationCount = purchaseAmount/1000;
  }

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(INPUT_TEXTS.WINNING_NUMBER);
    this.#winningNumbers = this.#validationWN(winningNumbers);
  }

  getBonusNumber() {
    
  }
}

export default InputManagement;