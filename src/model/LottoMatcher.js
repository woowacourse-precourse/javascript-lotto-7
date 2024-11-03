import { LOTTO_RANKING_SYSTEM } from '../constant/lotto';

class LottoMatcher {
  #winningNumber;

  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
  }

  getWinningLottos(lottoPocket) {
    return lottoPocket.showLottos().reduce(
      (acc, lottoNumbers) => {
        const { matchCount, isContainBonusNumber } =
          this.#compareLottoToWinningNumber(lottoNumbers);
        const lottoRank = LottoMatcher.#inspectLotto(matchCount, isContainBonusNumber);

        if (lottoRank) acc[lottoRank.RANK] += 1;
        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    );
  }

  static #inspectLotto(matchCount, isContainBonusNumber) {
    const rank = LOTTO_RANKING_SYSTEM.find((cur) => {
      if (cur.SHOULD_CONTAIN_BONUS_NUM && isContainBonusNumber && cur.MATCH_COUNT === matchCount)
        return true;
      if (cur.MATCH_COUNT === matchCount) return true;
      return false;
    });

    return rank;
  }

  #compareLottoToWinningNumber(lottoNumbers) {
    const matchCount = this.#winningNumber.filter((num) => lottoNumbers.includes(num)).length;
    const isContainBonusNumber = lottoNumbers.includes(this.#bonusNumber);

    return { matchCount, isContainBonusNumber };
  }
}

export default LottoMatcher;
