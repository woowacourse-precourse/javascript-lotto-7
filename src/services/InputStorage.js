class InputStorage {
  #money = 0;
  #mainNumbers;
  #bonusNumber;

  getMoney() {
    return this.#money;
  }

  setMoney(input) {
    this.#money = input;
  }

  getMainNumbers() {
    return this.#mainNumbers;
  }

  setMainNumbers(input) {
    this.#mainNumbers = input;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(input) {
    this.#bonusNumber = input;
  }
}

export default InputStorage;
