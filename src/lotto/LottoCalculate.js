import { LOTTO_PRIZE_MONEY_MAP } from "../constants/index.js";

class LottoCalculate {
  static initLottoResult = () => {
    return new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      ["5B", 0],
      [6, 0],
    ]);
  };

  static calculateResult = (lottoNumbers, winningNumbers, bonusNumber) => {
    const lottoResult = this.initLottoResult();

    for (const ticket of lottoNumbers) {
      const matchCount = winningNumbers.filter((number) => ticket.includes(number)).length;

      if (!lottoResult.has(matchCount)) {
        continue;
      }

      if (matchCount === 5 && ticket.includes(bonusNumber)) {
        lottoResult.set("5B", lottoResult.get("5B") + 1);
        continue;
      }

      lottoResult.set(matchCount, lottoResult.get(matchCount) + 1);
    }

    return lottoResult;
  };

  static getPrizeMoney = (lottoResult) => {
    return Array.from(lottoResult).reduce((money, [key, count]) => {
      const prizeMoney = LOTTO_PRIZE_MONEY_MAP.get(key);
      money += prizeMoney * count;
      return money;
    }, 0);
  };

  static getRevenueRate = (prizeMoney, price) => {
    return (prizeMoney / price) * 100;
  };

  static getLottoResult = (lottoNumbers, winningNumbers, bonusNumber, price) => {
    const lottoResult = this.calculateResult(lottoNumbers, winningNumbers, bonusNumber);
    const prizeMoney = this.getPrizeMoney(lottoResult);
    const revenueRate = this.getRevenueRate(prizeMoney, price);

    return { lottoResult, revenueRate };
  };
}

export default LottoCalculate;
