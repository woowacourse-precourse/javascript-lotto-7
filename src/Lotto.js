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
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }
    if (
      !numbers.every((num) => typeof num === "number" && num >= 1 && num <= 45)
    ) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  confirmMatches(winNum) {
    return this.#numbers.filter((number) => winNum.includes(number)).length;
  }
  confirmBonus(bonusNum) {
    return this.#numbers.includes(bonusNum);
  }
}

export default Lotto;
