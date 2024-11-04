import { Result } from "./Result.js";

export class LottoResult {
  #results;

  constructor() {
    const threeMatch = new Result(3, 5_000, 0)
    const fourMatch = new Result(4, 50_000, 0)
    const fiveMatch = new Result(5, 1_500_000, 0)
    const fiveMatchWithBonus = new Result(5, 30_000_000, 0)
    const sixMatch = new Result(6, 2_000_000_000, 0)

    this.#results = { threeMatch, fourMatch, fiveMatch, fiveMatchWithBonus, sixMatch }
  }


  calculateResult(myLottoArr, winningLotto) {
    const winningNumbers = winningLotto.getNumbers();
    const bonusNumber = winningLotto.getBonusNumber();

    for (let i = 0; i < myLottoArr.length; i++) {
      const lottoNumbers = myLottoArr[i].getNumbers();
      const matchCount = this.#calculateMatchCount(lottoNumbers, winningNumbers);

      this.#calculateLotto(lottoNumbers, bonusNumber, matchCount);
    }

    return this.#results;
  }

  #calculateMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number)).length;
  }

  #calculateLotto(lottoNumbers, bonusNumber, matchCount) {
    if (matchCount === 5) {
      this.#processFiveMatch(lottoNumbers, bonusNumber);
      return;
    }
    this.#processNonFiveMatch(matchCount);
  }

  #processFiveMatch(lottoNumbers, bonusNumber) {
    const hasBonus = lottoNumbers.includes(bonusNumber);
    if (hasBonus) {
      this.#results.fiveMatchWithBonus.addCount();
      return;
    }
    this.#results.fiveMatch.addCount();
  }

  #processNonFiveMatch(matchCount) {
    this.#addResultCount(matchCount);
  }

  #addResultCount(matchCount) {
    Object.values(this.#results).find((result) => {
      if (result.getResult().match === matchCount) {
        result.addCount();
      }
    })
  }
}
