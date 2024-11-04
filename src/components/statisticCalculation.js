import RULES from '../resources/RULES.js';

function calculateTotalReturn(statistics) {
  return Array.from(statistics.values()).reduce(
    (acc, { count, prize }) => acc + count * prize,
    0,
  );
}

export default function (prizes, inputMoney) {
  const statistics = new Map([
    [3, { count: 0, prize: RULES.THREE_CORRECT_PRIZE }],
    [4, { count: 0, prize: RULES.FOUR_CORRECT_PRIZE }],
    ['5withoutBonus', { count: 0, prize: RULES.FIVE_CORRECT_PRIZE }],
    ['5withBonus', { count: 0, prize: RULES.FIVE_BONUS_CORRECT_PRIZE }],
    [6, { count: 0, prize: RULES.SIX_CORRECT_PRIZE }],
  ]);
  prizes.forEach((value, key) => {
    let prizeDetails;
    if (key === RULES.MATCH_COUNT_FOR_BONUS) {
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
