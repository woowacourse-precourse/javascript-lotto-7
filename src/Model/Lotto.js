import ErrorHandler from './ErrorHandler.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    ErrorHandler.validateUniqueLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    ErrorHandler.validateLottoCount(numbers);
    ErrorHandler.validateUniqueLottoNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  lotteryStatus(lotto) {
    let count = 0;
    this.#numbers.forEach((number) => {
      if (lotto.includes(number)) count += 1;
    });
    return count;
  }

  haveBonusNumber(lotto, bonusNumber) {
    if (lotto.includes(bonusNumber)) {
      return true;
    }
    return false;
  }
}

export default Lotto;
