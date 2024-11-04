import { RANKS, PRIZES } from "../constants.js";

let initialLottoResults = {
  [RANKS.NO_PRIZE]: { prize: PRIZES[RANKS.NO_PRIZE], count: 0 },
  [RANKS.FIRST]: { prize: PRIZES[RANKS.FIRST], count: 0 },
  [RANKS.SECOND]: { prize: PRIZES[RANKS.SECOND], count: 0 },
  [RANKS.THIRD]: { prize: PRIZES[RANKS.THIRD], count: 0 },
  [RANKS.FOURTH]: { prize: PRIZES[RANKS.FOURTH], count: 0 },
  [RANKS.FIFTH]: { prize: PRIZES[RANKS.FIFTH], count: 0 },
};

export default function getLottoResults(lottos, winningNumbers, bonusNumber) {
  let lottoResults = Object.assign({}, initialLottoResults);

  lottos.forEach((lotto) => {
    const rank = lotto.winningRank(winningNumbers, bonusNumber);
    lottoResults[rank].count += 1;
  });

  return lottoResults;
}
