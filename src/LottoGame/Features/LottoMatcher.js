class LottoMatcher {
  #targetNumbers;
  #bonusNumber;
  #lottos;
  #ranks;

  constructor(targetNumbers, bonusNumber, lottos) {
    this.#lottos = lottos;
    this.#targetNumbers = targetNumbers;
    this.#bonusNumber = bonusNumber;
    this.#ranks = this.#generateRanks(this.#lottos);
  }

  #checkTargetNumbers(lotto) {
    let matchedNumbers = lotto.filter((number) =>
      this.#targetNumbers.includes(number)
    );

    return matchedNumbers.length;
  }

  #checkBonusNumber(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  #checkRanking(targetCount, hasBonus) {
    if (targetCount === 6) return 1;
    if (targetCount === 5 && hasBonus) return 2;
    if (targetCount === 5) return 3;
    if (targetCount === 4) return 4;
    if (targetCount === 3) return 5;
    return 0;
  }

  #generateRanks(lottos) {
    let ranks = [];
    lottos.forEach((lotto) => {
      let targetCount = this.#checkTargetNumbers(lotto);
      let hasBonus = this.#checkBonusNumber(lotto);
      let rank = this.#checkRanking(targetCount, hasBonus);

      ranks.push(rank);
    });

    return ranks;
  }

  getRanks() {
    return this.#ranks;
  }
}

export default LottoMatcher;
