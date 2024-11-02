class Lotto {
  #numbers;
  #matchedNumberCnt;
  #isMatchedBonusNum;
  #matchedTotalCnt;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#matchedNumberCnt = 0;
    this.#matchedTotalCnt = 0;
    this.#isMatchedBonusNum = false;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getMatchedNumberCnt() {
    return this.#matchedNumberCnt;
  }

  getIsMatchedBonusNumber() {
    return this.#isMatchedBonusNum;
  }

  getMatchedTotalCnt() {
    return this.#matchedTotalCnt;
  }

  #countingMatchedNumbers(winningNumbers) {
    this.#matchedNumberCnt = this.#numbers.reduce((cnt, element) => {
      if (winningNumbers.includes(element)) {
        return (cnt += 1);
      }
      return cnt;
    }, 0);
  }

  #countingMatchedBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      this.#isMatchedBonusNum = true;
      this.#matchedTotalCnt += 1;
    }
  }

  countingMatchedTotalNumbers(winningNumbers, bonusNumber) {
    this.#countingMatchedNumbers(winningNumbers);
    this.#countingMatchedBonusNumber(bonusNumber);
    this.#matchedTotalCnt += Number(this.#matchedNumberCnt);
  }
}

export default Lotto;
