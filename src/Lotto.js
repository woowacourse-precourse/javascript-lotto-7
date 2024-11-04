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

    const isInRange = numbers.every(num => num >= 1 && num <= 45);
    if (!isInRange) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error("[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.");
    }
  }

  // 당첨 여부 확인
  checkWinning(winningNumbers, bonusNumber) {
    const matchingCount = this.#numbers.filter(num => winningNumbers.includes(num)).length;
    const hasBonus = this.#numbers.includes(bonusNumber);

    switch (matchingCount) {
      case 6:
        return "1등";
      case 5:
        return hasBonus ? "2등" : "3등";
      case 4:
        return "4등";
      case 3:
        return "5등";
      default:
        return "꽝";
    }
  }

  // 로또 번호 반환
  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
