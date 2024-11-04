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
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }
  }

  getResult(resultNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((number) => resultNumbers.includes(number)).length;
    const isBonusMatched = this.#numbers.includes(bonusNumber);

    if (matchCount === 6) {
      return 1;
    }
    if (isBonusMatched && matchCount === 5) {
      return 2;
    }
    if (matchCount === 5) {
      return 3;
    }
   if (matchCount === 4) {
     return 4;
   }
   if (matchCount === 3) {
     return 5;
   }
    return -1;
  }
}

export default Lotto;
