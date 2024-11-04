import { Random } from "@woowacourse/mission-utils";

export default class Lotto {
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;
  #winningNumbers=[];
  #bonusNumber;

  setWinningAndBonusNumbers(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static generateLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(Lotto.MIN_LOTTO_NUMBER, Lotto.MAX_LOTTO_NUMBER, 6);
    return lottoNumbers;
  }

  // return : 로또 등수
  getLottoRank(LottoNumbers) {
    const winningCount = LottoNumbers.filter(number => this.#winningNumbers.includes(number))
    const actions = {
      3: () => {return 5},
      4: () => {return 4},
      5: () => {
        if (LottoNumbers.includes(this.#bonusNumber))
          return 2;
        return 3;
      },
      6: () => { return 1; },
      default: () => { return 0;} 
    }
    const rank = (actions[winningCount] || actions.default)();
    console.log(rank);
    return rank;
  }
}