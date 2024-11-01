function getMarginSum(winningStats, purchase) {
  const VALUES = [...winningStats.values()];
  const MARGIN_SUM = VALUES.reduce((acc, currentValue) => {
    const SINGLE_MARGIN = currentValue.count * currentValue.winningAmount;
    acc += SINGLE_MARGIN;
  }, 0);
  return MARGIN_SUM;
};

export { getMarginSum };