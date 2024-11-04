function calculateTotalReturn(statistics) {
  return Array.from(statistics.values()).reduce(
    (acc, { count, prize }) => acc + count * prize,
    0,
  );
}

export default function (prizes, inputMoney) {
  const statistics = new Map([
    [3, { count: 0, prize: 5000 }],
    [4, { count: 0, prize: 50000 }],
    ['5withoutBonus', { count: 0, prize: 1500000 }],
    ['5withBonus', { count: 0, prize: 30000000 }],
    [6, { count: 0, prize: 2000000000 }],
  ]);
  prizes.forEach((value, key) => {
    let prizeDetails;
    if (key === 5) {
      prizeDetails = statistics.get('5withoutBonus');
      prizeDetails.count = value.withoutBonus;
      prizeDetails = statistics.get('5withBonus');
      prizeDetails.count = value.withBonus;
      return;
    }
    if (!statistics.has(key)) return;
    prizeDetails = statistics.get(key);
    prizeDetails.count = value;
  });

  const totalReturn = calculateTotalReturn(statistics);
  statistics.set('ROI', ((totalReturn / inputMoney) * 100).toFixed(1));

  return statistics;
}
