import { LOTTO_RANKING_SYSTEM } from '../constant/index.js';

class LottoMatcher {
  #winningNumber;

  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
  }

  getWinningLottos(lottoNumberList) {
    return lottoNumberList.reduce(
      (acc, lottoNumbers) => {
        const { matchCount, isContainBounusNumber } =
          this.#compareLottoToWinningNumber(lottoNumbers);
        const lottoRank = LottoMatcher.#inspectLotto(matchCount, isContainBounusNumber);

        if (lottoRank) acc[lottoRank] += 1;

        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    );
  }

  static #inspectLotto(matchCount, isContainBounusNumber) {
    const lottoRank = Object.entries(LOTTO_RANKING_SYSTEM).reduce((prev, cur) => {
      const [rank, { MATCH_COUNT, SHOULD_CONTAIN_BONUS_NUM }] = cur;

      if (SHOULD_CONTAIN_BONUS_NUM && isContainBounusNumber && matchCount === MATCH_COUNT)
        return rank;
      if (matchCount === MATCH_COUNT) return rank;

      return prev;
    });

    return lottoRank;
  }

  #compareLottoToWinningNumber(lottoNumbers) {
    const matchCount = this.#winningNumber.filter((num) => lottoNumbers.includes(num)).length;
    const isContainBonusNumber = lottoNumbers.includes(this.#bonusNumber);

    return { matchCount, isContainBonusNumber };
  }
}

export default LottoMatcher;
