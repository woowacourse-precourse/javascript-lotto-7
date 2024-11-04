import { CONFIG } from '../constants/index.js';

class InputStore {
  static #instance = null;

  #state = {
    money: CONFIG.initialMoneyState,
    mainNumbers: CONFIG.initialMainNumbersState,
    bonusNumber: CONFIG.initialBonusNumberState,
  };

  constructor() {
    if (InputStore.#instance) {
      return InputStore.#instance;
    }

    InputStore.#instance = this;
  }

  getMoney() {
    return this.#state.money;
  }

  setMoney(input) {
    this.#state.money = input;
  }

  getMainNumbers() {
    return this.#state.mainNumbers;
  }

  setMainNumbers(input) {
    this.#state.mainNumbers = input;
  }

  getBonusNumber() {
    return this.#state.bonusNumber;
  }

  setBonusNumber(input) {
    this.#state.bonusNumber = input;
  }
}

export default InputStore;
