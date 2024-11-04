import { Random } from '@woowacourse/mission-utils';

class User {
  #purchaseAmount;
  #purchaseCount;
  #lottoList;

  #lotteryStatistics = {
    3: { 당첨금액: '5,000', 개수: 0 },
    4: { 당첨금액: '50,000', 개수: 0 },
    5: {
      '보너스 번호': {
        false: { 당첨금액: '1,500,000', 개수: 0 },
        true: { 당첨금액: '30,000,000', 개수: 0 },
      },
    },
    6: { 당첨금액: '2,000,000,000', 개수: 0 },
  };

  #profitRate;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseCount = this.#lottoCount(purchaseAmount);
    this.#buyLotto();
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getPurchaseCount() {
    return this.#purchaseCount;
  }

  getLottoList() {
    return this.#lottoList;
  }

  getLotteryStatistics() {
    return this.#lotteryStatistics;
  }

  getProfitRate() {
    return this.#profitRate;
  }

  setLotteryStatistics(count, hasBonusNumber) {
    if (count < 3) return;
    if (count === 5)
      this.#lotteryStatistics[5]['보너스 번호'][hasBonusNumber].개수 += 1;
    else {
      this.#lotteryStatistics[count].개수 += 1;
    }
  }

  #lottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    return lottoCount;
  }

  #buyLotto() {
    this.#lottoList = Array.from({ length: this.#purchaseCount }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6),
    );
  }

  calculateProfitRate(lotteryStatistics) {
    let total = 0;
    Object.keys(lotteryStatistics).forEach((count) => {
      const statistic = lotteryStatistics[count];
      if (count === '5') {
        total +=
          Number(statistic['보너스 번호'][false].당첨금액.replaceAll(',', '')) *
            statistic['보너스 번호'][false].개수 +
          Number(statistic['보너스 번호'][true].당첨금액.replaceAll(',', '')) *
            statistic['보너스 번호'][true].개수;
      } else {
        total +=
          Number(statistic.당첨금액.replaceAll(',', '')) * statistic.개수;
      }
    });

    this.#profitRate = (total / this.#purchaseAmount) * 100;
  }
}

export default User;
