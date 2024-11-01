import { INPUT_ERROR_MESSAGES } from '../contents/InputErrorMessages.js';

class MoneyManager {
  static #LOTTO_PRICE = 1000;
  #money;

  constructor(money) {
    this.#money = this.validateMoney(money);
  }

  //유효성 검사
  validateMoney(money) {
    this.checkMissingAmount(money);
    this.checkNumericInput(money);
    this.checkPurchaseUnit(money);
  }

  //빈 문자 검증
  checkMissingAmount(money) {
    if (money == null) {
      throw new Error(`[ERROR] : ${INPUT_ERROR_MESSAGES.missingMoney}`);
    }
  }

  //숫자 입력 검증
  checkNumericInput(money) {
    if (isNaN(money)) {
      throw new Error(`[ERROR] : ${INPUT_ERROR_MESSAGES.nonNumericInput}`);
    }
  }

  checkPurchaseUnit(money) {
    if (money % MoneyManager.#LOTTO_PRICE != 0) {
      throw new Error(`[ERROR] : ${INPUT_ERROR_MESSAGES.notUnts1000Won}`);
    }
  }
}

export default MoneyManager;
