import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import { LOTTO_PRIZE } from '../constants/lottoResults.js';

const calculation = {
  lottoCount(purchasePrice) {
    return purchasePrice / LOTTO_CONFIG.PRICE;
  },
  lottoResult(lottos, winningLotto, bonusNumber) {
    const lottoResult = { ...LOTTO_PRIZE };

    lottos.forEach((lotto) => {
      const rank = lotto.calculateRank(winningLotto, bonusNumber);
      if (rank) lottoResult[rank].count += 1;
    });

    return lottoResult;
  },
  lottoRateOfReturn(lottoResult, purchasePrice) {
    const winningAmount = Object.values(lottoResult).reduce(
      (sum, { amount, count }) => sum + amount * count,
      0
    );

    return ((winningAmount / purchasePrice) * 100).toFixed(1);
  },
};

export default calculation;
