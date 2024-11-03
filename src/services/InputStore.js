class InputStore {
  static #instance = null;

  #state = {
    money: 0,
    mainNumbers: null,
    bonusNumber: null,
  };

  constructor() {
    if (InputStore.#instance) {
      return InputStore.#instance;
    }

    InputStore.#instance = this;
  }

  static getInstance() {
    if (!InputStore.#instance) {
      InputStore.#instance = new InputStore();
    }

    return InputStore.#instance;
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
