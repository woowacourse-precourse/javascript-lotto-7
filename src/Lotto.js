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
  }

  checkWinStatus(winningNumbers, bonusNumber) {
    const winCount = this.#checkWinStatus(winningNumbers);
    const isBonusMatched = this.#checkBonusStatus(bonusNumber);
    return this.#checkRank(winCount, isBonusMatched);
  }

  #checkWinStatus(winningNumbers) {
    let winCount = 0;
    this.#numbers.forEach((myNum) => {
      if (winningNumbers.includes(myNum)) {
        winCount++;
      }
    });
    return winCount;
  }

  #checkBonusStatus(bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      return true;
    }
  }

  #checkRank(winCount, isBonusMatched) {
    if (winCount === 6) return 1;
    if (winCount === 5 && isBonusMatched) return 2;
    if (winCount === 5) return 3;
    if (winCount === 4) return 4;
    if (winCount === 3) return 5;
    return 0;
  }
}

export default Lotto;
