function getMarginSum(winningStats) {
  const VALUES = [...winningStats.values()];
  const MARGIN_SUM = VALUES.reduce((acc, currentValue) => {
    const SINGLE_MARGIN = currentValue.count * currentValue.winningAmount;
    acc += SINGLE_MARGIN;
    return acc;
  }, 0);
  return MARGIN_SUM;
};

function getMarginRate(marginSum, purchase) {
  const MARGIN_RATE = (marginSum / purchase) * 100;
  const RESULT_RATE = String(Number(MARGIN_RATE).toFixed(1));
  return RESULT_RATE;
}

export { getMarginSum, getMarginRate };