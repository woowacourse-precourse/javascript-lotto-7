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
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  // TODO: 추가 기능 구현
  checkPrize(prizeNumbers, bonusNumber) {
    let matchedBonusNumber = 0;

    const matchingNumbers = prizeNumbers.filter((element) =>
      this.#numbers.includes(Number(element)),
    );

    if (this.#numbers.includes(bonusNumber)) {
      matchedBonusNumber = 1;
    } else {
      matchedBonusNumber = 0;
    }

    return this.calculatePrize(matchingNumbers.length, matchedBonusNumber);
  }

  calculatePrize(matchedNumbers, matchedBonusNumber) {
    if (matchedNumbers < 3) {
      return '0';
    }
    if (matchedNumbers === 3) {
      return '5';
    }
    if (matchedNumbers === 4) {
      return '4';
    }
    if (matchedNumbers === 5 && matchedBonusNumber === 0) {
      return '3';
    }
    if (matchedNumbers === 5 && matchedBonusNumber === 1) {
      return '2';
    }
    if (matchedNumbers === 6) {
      return '1';
    }
  }
}

export default Lotto;
