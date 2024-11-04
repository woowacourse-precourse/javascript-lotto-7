class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    // 1~45 사이의 번호가 아닌 경우
    if (!numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }

    // 중복되는 번호가 있는 경우
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  // 로또 번호 배열 반환
  getNumbers() {
    return [...this.#numbers];
  }

  // 당첨 번호와 일치하는 개수 계산
  countMatchingNumbers(winningNumber) {
    return this.#numbers.filter(number => winningNumber.includes(number)).length;
  }

  // 보너스 번호 포함 여부
  includeBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
