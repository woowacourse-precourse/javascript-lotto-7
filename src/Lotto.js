import LottoValidator from './domain/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const lottoValidator = new LottoValidator();
    lottoValidator.validateLottoNumber(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  matchNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  getCompareResults(winningNumbers, bonusNumber) {
    const matchedNumbers = this.matchNumbers(winningNumbers);
    const hasBonusNumber = this.hasBonusNumber(bonusNumber);

    return { matchedNumbers, hasBonusNumber };
  }
}

export default Lotto;
