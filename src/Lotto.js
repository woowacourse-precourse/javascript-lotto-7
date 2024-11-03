class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getCorrectCount(winningNumber, bonusNumber) {
    const correctCount = this.#numbers.filter(number => winningNumber.includes(number)).length;
    const isBonusMatch = this.#numbers.includes(bonusNumber);

    if (correctCount === 5 && isBonusMatch) {
      return 7; // 5개 일치하고 보너스 볼 일치한 경우를 7이라고 임의로 지정함
    }

    return correctCount;
  }
}

export default Lotto;
