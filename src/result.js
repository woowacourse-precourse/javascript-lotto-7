export function evaluateResults(lottoNumbers, winningNumbers, bonusNumber) {
  const rankCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

    lottoNumbers.forEach(lotto => {
      const numbers = lotto.getNumbers();
      const matchedCount = countMatches(numbers, winningNumbers);
      const isBonusMatched = numbers.includes(bonusNumber);

    if (matchedCount === 6) {
      rankCount[1]++;
    } else if (matchedCount === 5 && isBonusMatched) {
      rankCount[2]++;
    } else if (matchedCount === 5) {
      rankCount[3]++;
    } else if (matchedCount === 4) {
      rankCount[4]++;
    } else if (matchedCount === 3) {
      rankCount[5]++;
    }
  });

  return rankCount;
}

export function countMatches(lotto, winningNumbers) {
  return lotto.filter(number => winningNumbers.includes(number)).length;
}
