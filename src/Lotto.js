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
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }
  bonusErrorCheck(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 달라야 합니다.");
    }
  }
  equalWinning(lotto) {
    let count = 0;
    this.#numbers.forEach((number) => {
      if (lotto.equalCheck(number)) {
        count += 1;
      }
    });
    return count;
  }
  equalCheck(inputNumber) {
    return this.#numbers.some((number) => number == inputNumber);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
