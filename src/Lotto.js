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
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  printNumbers() {
    return `[${this.#numbers.join(', ')}]`;
  }

  static checkLottoResult(userLotto, prizeLotto, bonusNumber) {
    // 1. 일치하는 번호 개수 확인
    const matchingCount = userLotto.#numbers.filter((number) => prizeLotto.#numbers.includes(number)).length;
  
    // 2. 보너스 번호 일치 여부 확인
    const hasBonus = userLotto.#numbers.includes(bonusNumber);
  
    // 3. 당첨 결과 반환
    if (matchingCount === 6) return 1; // 1등
    if (matchingCount === 5 && hasBonus) return 2; // 2등
    if (matchingCount === 5) return 3; // 3등
    if (matchingCount === 4) return 4; // 4등
    if (matchingCount === 3) return 5; // 5등
    return 6;
  }
}

export default Lotto;
