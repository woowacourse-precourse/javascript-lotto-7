export const initializeResults = () => {
  const results = {
    match3: 0,
    match4: 0,
    match5: 0,
    match5Bonus: 0,
    match6: 0,
  };

  return results;
};

export const calculateResult = (lottos, results, winningLotto, bonusNumber) => {
  lottos.forEach((lotto) => {
    const matchCount = lotto.getMatchCount(winningLotto);
    const hasBonus = lotto.hasBonusNumber(bonusNumber);

    if (matchCount === 6) results.match6 += 1;
    else if (matchCount === 5 && hasBonus) results.match5Bonus += 1;
    else if (matchCount === 5) results.match5 += 1;
    else if (matchCount === 4) results.match4 += 1;
    else if (matchCount === 3) results.match3 += 1;
  });

  return results;
};

export const calculateTotalProfit = async (results) => {
  const totalProfit =
    results.match3 * 5000 +
    results.match4 * 50000 +
    results.match5 * 1500000 +
    results.match5Bonus * 30000000 +
    results.match6 * 2000000000;

  return totalProfit;
};

export const calculateProfitRate = async (totalProfit, purchasePrice) => {
  const profitRate = ((totalProfit / purchasePrice) * 100).toFixed(1);

  return profitRate;
};
