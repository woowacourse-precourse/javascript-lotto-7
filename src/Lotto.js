import Validation from './Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.checkLottoNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  countMatchingNumbers(numbers) {
    const winningNumbers = [...numbers];
    const lottoNumberSet = new Set([...this.#numbers]);
    const matchingNumbers = winningNumbers.filter((number) =>
      lottoNumberSet.has(number),
    );

    return matchingNumbers.length;
  }

  isBonusNumberMatched(bonusNumber) {
    const lottoNumbers = [...this.#numbers];
    return lottoNumbers.includes(bonusNumber);
  }
}

export default Lotto;
