import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from '../Lotto.js';

import { LOTTO_PRICE } from '../constants/config.js';

class LottoGameService {
  constructor() {
    this.lottos = [];
    this.prizes = {
      1: {
        matchCount: 6, bonus: false, money: 2000000000, count: 0,
      },
      2: {
        matchCount: 5, bonus: true, money: 30000000, count: 0,
      },
      3: {
        matchCount: 5, bonus: false, money: 1500000, count: 0,
      },
      4: {
        matchCount: 4, bonus: false, money: 50000, count: 0,
      },
      5: {
        matchCount: 3, bonus: false, money: 5000, count: 0,
      },
    };
  }

  getLottos() {
    return [...this.lottos];
  }

  setLottos(userMoney) {
    const quantity = this.getLottoQuantity(userMoney);
    this.lottos = this.generateLottos(quantity);
  }

  getPrizes() {
    return this.prizes;
  }

  generateWinningLotto(winningNumbers) {
    return new Lotto(winningNumbers);
  }

  generateLotto() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumber.sort((a, b) => a - b);
    return new Lotto(randomNumber);
  }

  generateLottos(quantity) {
    const lottos = [];

    for (let i = 0; i < quantity; i++) {
      lottos.push(this.generateLotto());
    }

    return lottos;
  }

  getLottoQuantity(userMoney) {
    return userMoney / LOTTO_PRICE;
  }

  calculateRank(matchedCount, isBonusMatched) {
    if (matchedCount === 5 && isBonusMatched === true) { return 2; }

    const rankConditions = {
      6: 1,
      5: 3,
      4: 4,
      3: 5,
    };

    return rankConditions[matchedCount] || -1;
  }

  increaseRankCount(rank) {
    if (rank > 0 && rank < 6) {
      this.prizes[rank].count += 1;
    }
  }

  updateLottoPrizes(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const [matchedCount, isBonusMatched] = lotto.getMatchResult(winningNumbers, bonusNumber);
      const rank = this.calculateRank(matchedCount, isBonusMatched);
      this.increaseRankCount(rank);
    });
  }

  getTotalPrize(prizes) {
    let totalPrize = 0;
    for (const [_, prize] of Object.entries(prizes)) {
      totalPrize += prize.money * prize.count;
    }
    return totalPrize;
  }

  roundNumber(number) {
    if (number.toString().split('.')[1] > 1) {
      return Number(number.toFixed(1));
    }
    return number;
  }

  getPayoutPercentage(userMoney, totalPrize) {
    return (totalPrize / userMoney) * 100;
  }

  getRoundedPayoutPercentage(userMoney) {
    const totalPrize = this.getTotalPrize(this.prizes);
    const payoutPercentage = this.getPayoutPercentage(userMoney, totalPrize);
    return this.roundNumber(payoutPercentage);
  }
}

export default LottoGameService;
