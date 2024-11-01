export function printResult(lottos, winningNumbers, bonusNumber) {
  const result = lottos.reduce(
    (acc, lotto) => {
      const matchCount = getMatchCount(lotto, winningNumbers);
      const isHasBonusNumber = hasBonusNumber(lotto, bonusNumber);
      const rank = getRank(matchCount, isHasBonusNumber);

      acc[rank] += 1;
      return acc;
    },
    {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
      MISS: 0,
    }
  );

  console.log(`1등: ${result.FIRST}개`);
  console.log(`2등: ${result.SECOND}개`);
  console.log(`3등: ${result.THIRD}개`);
  console.log(`4등: ${result.FOURTH}개`);
  console.log(`5등: ${result.FIFTH}개`);
  console.log(`낙첨: ${result.MISS}개`);
}

function getMatchCount(lotto, winningNumbers) {
  return lotto.numbers.filter((number) => winningNumbers.numbers.includes(number)).length;
}

function hasBonusNumber(lotto, bonusNumber) {
  return lotto.numbers.includes(bonusNumber);
}

function getRank(matchCount, isHasBonusNumber) {
  if (matchCount === 6) {
    return 'FIRST';
  }
  if (matchCount === 5 && isHasBonusNumber) {
    return 'SECOND';
  }
  if (matchCount === 5) {
    return 'THIRD';
  }
  if (matchCount === 4) {
    return 'FOURTH';
  }
  if (matchCount === 3) {
    return 'FIFTH';
  }
  return 'MISS';
}
