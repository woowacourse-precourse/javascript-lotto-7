import { Console } from '@woowacourse/mission-utils';
import { INPUT_TEXTS, ERROR_TEXTS } from './Constants.js';

class InputManagement {
  #purchaseAmout = 0;
  #availablePublicationCount = 0;
  #winningNumbers = [];
  #bonusNumber = 0;

  constructor() {}

  getPurchaseAmount() {
    return this.#purchaseAmout;
  }

  getPublicationCount() {
    return this.#availablePublicationCount;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
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

    return purchaseAmount;
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
      throw new Error(ERROR_TEXTS.NOT_A_FLOAT_WINNING_NUMBER);
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

  #validationBN(bonusNumber) {
    if(Number.isNaN(Number(bonusNumber))) {
      throw new Error(ERROR_TEXTS.NOT_A_NUMBER_BONUS_NUMBER);
    }

    if(bonusNumber === '') {
      throw new Error(ERROR_TEXTS.NOT_A_BLANK_BONUS_NUMBER);
    }

    if(bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_TEXTS.OUT_OF_RANGE_BONUS_NUMBER);
    }

    if(bonusNumber % 1 !== 0) {
      throw new Error(ERROR_TEXTS.NOT_A_FLOAT_BONUS_NUMBER);
    }

    if(this.#winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR_TEXTS.NOT_A_DUPLICATION_BONUS_NUMBER);
    }

    return Number(bonusNumber);
  }

  #calculatePublicationCount(purchaseAmount) {
    return purchaseAmount / 1000;
  }

  async inputPurchaseAmount() {
    let isFailed = true;
    do {
      try {
        const purchaseAmount = await Console.readLineAsync(INPUT_TEXTS.PURCHASE_AMOUNT);

        this.#purchaseAmout = this.#validationPA(purchaseAmount);
        this.#availablePublicationCount = this.#calculatePublicationCount(purchaseAmount);

        isFailed = false;
      } catch(error) {
        Console.print(error.message);

        isFailed = true;
      }
    } while(isFailed);
  }

  async inputWinningNumbers() {
    let isFailed = true;
    do {
      try {
        const winningNumbers = await Console.readLineAsync(INPUT_TEXTS.WINNING_NUMBER);
        this.#winningNumbers = this.#validationWN(winningNumbers);

        isFailed = false;
      } catch(error) {
        Console.print(error.message);

        isFailed = true;
      }
    } while(isFailed);
  }

  async inputBonusNumber() {
    let isFailed = true;
    do {
      try {
        const bonusNumber = await Console.readLineAsync(INPUT_TEXTS.BONUS_NUMBER);
        this.#bonusNumber = this.#validationBN(bonusNumber);

        isFailed = false;
      } catch(error) {
        Console.print(error.message);

        isFailed = true;
      }
    } while(isFailed);
  }
}

export default InputManagement;