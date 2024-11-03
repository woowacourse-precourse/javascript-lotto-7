let initialLottoResults = {
  0: { prize: 0, count: 0 },
  1: { prize: 2000000000, count: 0 },
  2: { prize: 30000000, count: 0 },
  3: { prize: 1500000, count: 0 },
  4: { prize: 50000, count: 0 },
  5: { prize: 5000, count: 0 },
};

export default function getLottoResults(lottos, winningNumbers, bonusNumber) {
  let lottoResults = Object.assign({}, initialLottoResults);

  lottos.forEach((lotto) => {
    const rank = lotto.winningRank(winningNumbers, bonusNumber);
    lottoResults[rank].count += 1;
  });

  return lottoResults;
}
