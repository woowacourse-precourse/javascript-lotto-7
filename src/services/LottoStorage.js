class LottoStorage {
  #money = 0;
  #mainNumbers;
  #bonumNumber;

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
    return this.#bonumNumber;
  }

  setBonusNumber(input) {
    this.#bonumNumber = input;
  }
}

export default LottoStorage;
