class CheckHowmuch {
  static checkHowmuch(lotto, winningNumbers, bonus) {
    const result = [];
    lotto.forEach((numbers) => {
      const count = numbers.filter((number) => winningNumbers.includes(number)).length;
      const isBonus = numbers.includes(bonus);
      result.push(this.getRank(count, isBonus));
    });
    return result;

  }
}