import LOTTO_RANK from "../../constant/Rank.js";

class Stats {
  #fifth;
  #fourth;
  #third;
  #second;
  #first;

  constructor(myLottoList) {
    this.#first = 0;
    this.#second = 0;
    this.#third = 0;
    this.#fourth = 0;
    this.#fifth = 0;
    this.count(myLottoList);
  }

  count(myLottoList) {
    myLottoList.forEach((myLotto) => {
      const { matchResult } = myLotto;
      this.#countRank(matchResult);
    });
  }

  #countRank(matchResult) {
    const { matchCount, bonusMatch } = matchResult;

    if (matchCount === LOTTO_RANK.first.matchCount) {
      this.#first += 1;
    } else if (matchCount === LOTTO_RANK.second.matchCount && bonusMatch) {
      this.#second += 1;
    } else if (matchCount === LOTTO_RANK.third.matchCount) {
      this.#third += 1;
    } else if (matchCount === LOTTO_RANK.fourth.matchCount) {
      this.#fourth += 1;
    } else if (matchCount === LOTTO_RANK.fifth.matchCount) {
      this.#fifth += 1;
    }
  }

  get fifth() {
    return this.#fifth;
  }

  get fourth() {
    return this.#fourth;
  }

  get third() {
    return this.#third;
  }

  get second() {
    return this.#second;
  }

  get first() {
    return this.#first;
  }
}

export default Stats;
