import LottoIssuer from './LottoIssuer.js';

class LottoChecker {
  static PRIZE_TIERS = [
    { tier: 0, matchCount: 6, bonus: false, prize: 2000000000 },
    { tier: 1, matchCount: 5, bonus: true, prize: 30000000 },
    { tier: 2, matchCount: 5, bonus: false, prize: 1500000 },
    { tier: 3, matchCount: 4, bonus: false, prize: 50000 },
    { tier: 4, matchCount: 3, bonus: false, prize: 5000 },
  ];

  constructor(winningNumbers, bonusNumber) {
    this.lottoCheckResults = new Array(5).fill(0);
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  checkSingleLotto(lotto) {
    const numbers = lotto.getNumbers();
    const matchCount = numbers.filter((num) =>
      this.winningNumbers.includes(num)
    ).length;
    const hasBonus = numbers.includes(this.bonusNumber);

    return this.findTier(matchCount, hasBonus);
  }

  checkWinningLottos(lottos) {
    for (const lotto of lottos) {
      const tier = this.checkSingleLotto(lotto);
      this.countCheckResults(tier);
    }
    return this.lottoCheckResults;
  }

  countCheckResults(tier) {
    if (tier !== undefined) {
      this.lottoCheckResults[tier]++;
    }
  }

  findTier(matchCount, hasBonus) {
    const tier = LottoChecker.PRIZE_TIERS.find(
      (e) => e.matchCount === matchCount && e.bonus && hasBonus
    );
    return tier ? tier.tier : undefined;
  }
}

export default LottoChecker;
