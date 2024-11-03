const matchLotto = (lottoList, winningNumbers, bonusNumber) => {
  const matchCountList = {
    3: 0,
    4: 0,
    5: 0,
    "5bounsBall": 0,
    6: 0,
  };
  lottoList.forEach((lotto) => {
    const numbers = lotto.getNumbers();

    const matchedCount = numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    const bonusMatch = numbers.includes(bonusNumber);
    if (3 <= matchedCount && matchedCount <= 6) {
      if (matchedCount == 5 && bonusMatch) matchCountList["5bounsBall"] += 1;
      else matchCountList[matchedCount] += 1;
    }
  });

  return matchCountList;
};

export default matchLotto;
