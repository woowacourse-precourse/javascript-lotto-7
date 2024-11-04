import {
  PERCENTAGE_MULTIPLIER,
  DECIMAL_PLACE,
} from '../constants/calculationConfig.js';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';
import { LOTTO_PRIZE } from '../constants/lottoResults.js';

const calculationLotto = {
  count(purchasePrice) {
    return purchasePrice / LOTTO_CONFIG.PRICE;
  },
  result(lottos, winningLotto, bonusNumber) {
    const lottoResult = JSON.parse(JSON.stringify(LOTTO_PRIZE));

    lottos.forEach((lotto) => {
      const rank = lotto.calculateRank(winningLotto, bonusNumber);
      if (rank) lottoResult[rank].count += 1;
    });

    return lottoResult;
  },
  rateOfReturn(lottoResult, purchasePrice) {
    const winningAmount = Object.values(lottoResult).reduce(
      (sum, { amount, count }) => sum + amount * count,
      0
    );

    return ((winningAmount / purchasePrice) * PERCENTAGE_MULTIPLIER).toFixed(
      DECIMAL_PLACE
    );
  },
};

export default calculationLotto;
