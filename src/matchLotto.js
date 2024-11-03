const matchLotto = (lottoList, winningNumbers, bonusNumber) => {
  lottoList.forEach((lotto) => {
    const numbers = lotto.getNumbers();

    const matchedCount = numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    const bonusMatch = numbers.includes(bonusNumber);

    if (bonusMatch) matchedCount += 1;
  });
};

export default matchLotto;
