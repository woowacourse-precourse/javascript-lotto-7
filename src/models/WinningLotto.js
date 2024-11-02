export default class WinningLotto {
  #mainNumbers;
  #bonusNumber;

  setMainNumbers(mainNumbers) {
    this.#validateMainNumbers(mainNumbers);
    this.#mainNumbers = mainNumbers;
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getMainNumbers() {
    return this.#mainNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validateMainNumbers(mainNumbers) {}

  #validateBonusNumber(bonusNumber) {}
}
