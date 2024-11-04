import { EarningTable } from "../View/EarningTable";

const RankingTable = (matchedNumberCnt, isMatchedBonusNum) => {
  if (matchedNumberCnt === 6) {
    return EarningTable.FIRST;
  } else if (matchedNumberCnt === 5 && isMatchedBonusNum) {
    return EarningTable.SECOND;
  } else if (matchedNumberCnt === 5) {
    return EarningTable.THIRD;
  } else if (matchedNumberCnt === 4) {
    return EarningTable.FOURTH;
  } else if (matchedNumberCnt === 3) {
    return EarningTable.FIFTH;
  }
  return EarningTable.NONE;
};

class Lotto {
  #numbers;
  #matchedNumberCnt;
  #isMatchedBonusNum;
  #matchedTotalCnt;
  #rank;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#matchedNumberCnt = 0;
    this.#matchedTotalCnt = 0;
    this.#isMatchedBonusNum = false;
    this.#rank = EarningTable.NONE;
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

  getRank() {
    return this.#rank;
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

  #rankingLotto() {
    this.#rank = RankingTable(this.#matchedNumberCnt, this.#isMatchedBonusNum);
  }

  countingMatchedTotalNumbers(winningNumbers, bonusNumber) {
    this.#countingMatchedNumbers(winningNumbers);
    this.#countingMatchedBonusNumber(bonusNumber);
    this.#matchedTotalCnt += Number(this.#matchedNumberCnt);
    this.#rankingLotto();
  }
}

export default Lotto;
