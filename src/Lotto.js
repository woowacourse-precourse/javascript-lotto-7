import IOProcessor from './IOProcessor.js';

/**
 *
 */
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현

  /**
   *
   */
  printLotto() {
    const ioProcessor = new IOProcessor();
    ioProcessor.processOuput(this.#numbers);
  }

  /**
   *
   */
  getLottoResult(winningNumbers, winningBonusNumber) {
    const matchCount = this.calcuateNumberMatchCount(winningNumbers);
    const rank = this.calcuateRank(matchCount, winningBonusNumber);
    return rank;
  }

  /**
   *
   */
  calcuateNumberMatchCount(winningNumbers) {
    let matchCount = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchCount++;
      }
    });

    return matchCount;
  }

  /**
   *
   */
  calcuateRank(matchCount, winningBonusNumber) {
    if (matchCount === 6) {
      return 1;
    } else if (matchCount === 5 && this.#numbers.includes(winningBonusNumber)) {
      return 2;
    } else if (matchCount === 5) {
      return 3;
    } else if (matchCount === 4) {
      return 4;
    } else if (matchCount === 3) {
      return 5;
    }

    return 0;
  }
}

export default Lotto;
