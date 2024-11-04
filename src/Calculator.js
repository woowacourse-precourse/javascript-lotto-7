class Calculator {
  static calculateMatch(
    lotto,
    winningNumbers,
    bonusNumber
  ) {
    const matches = lotto.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const hasBonus = lotto.includes(bonusNumber);
    if (matches === 6) return "6개 일치";
    if (matches === 5 && hasBonus)
      return "5개 일치, 보너스 볼 일치";
    if (matches === 5) return "5개 일치";
    if (matches === 4) return "4개 일치";
    if (matches === 3) return "3개 일치";
    return null;
  }
}

module.exports = Calculator;
