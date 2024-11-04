import rank from './rankInfo.js';

class Lotto {
  #numbers;

  #matchCnt;

  #rank;

  constructor(numbers) {
    Lotto.#validate(numbers);
    Lotto.#checkDuplicate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  get rank() {
    return this.#rank;
  }

  get matchCnt() {
    return this.#matchCnt;
  }

  static #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static #checkDuplicate(numbers) {
    const TOTAL_LOTTO_CNT = 45;
    const checked = Array(TOTAL_LOTTO_CNT + 1).fill(false);
    for (let i = 0; i < 6; i += 1) {
      if (checked[numbers[i]]) {
        throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
      }
      checked[numbers[i]] = true;
    }
  }

  countMatchNumber(winningNumbers, bonusNumber) {
    let cnt = 0;
    let isBonusNumberMatch = 0;
    const lottoNumbers = this.#numbers;
    for (let i = 0; i < lottoNumbers.length; i += 1) {
      if (winningNumbers.includes(lottoNumbers[i])) {
        cnt += 1;
      }
    }
    if (this.#numbers.includes(bonusNumber)) {
      isBonusNumberMatch = true;
    }
    this.#matchCnt = cnt;
    this.#setRank(cnt, isBonusNumberMatch);
  }

  #setRank(cnt, isBonusNumberMatch) {
    let resultRank = rank[cnt];
    if (cnt === 5 && isBonusNumberMatch) {
      resultRank = 2;
    }
    this.#rank = resultRank;
    return this.#rank;
  }
}

export default Lotto;
