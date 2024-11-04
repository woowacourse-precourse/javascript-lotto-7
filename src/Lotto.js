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

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호에는 중복이 없어야 합니다.");
    }

    // 번호가 1~45 범위인지 검증
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  get numbers() {
    return this.#numbers;
  }

  // 당첨 번호와 비교하여 등수 계산 메서드 추가
  getRank(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const hasBonus = this.#numbers.includes(bonusNumber);

    if (matchCount === 6) return 1; // 1등: 6개 번호 일치
    if (matchCount === 5 && hasBonus) return 2; // 2등: 5개 번호 + 보너스 번호 일치
    if (matchCount === 5) return 3; // 3등: 5개 번호 일치
    if (matchCount === 4) return 4; // 4등: 4개 번호 일치
    if (matchCount === 3) return 5; // 5등: 3개 번호 일치
    return 0; // 꽝
  }
}

export default Lotto;
