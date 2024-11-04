class LottoPrizeEvaluator {
  static checkResult(numbers, { win, bonus }) {
    const correctCount = this.countCorrectNumbers(numbers, win);
    const hasBonus = this.checkBonus(numbers, bonus);
    return this.determineResult(correctCount, hasBonus);
  }

  static countCorrectNumbers(numbers, win) {
    return numbers.filter((number) => win.includes(number)).length;
  }

  static checkBonus(numbers, bonus) {
    return numbers.includes(bonus);
  }

  static determineResult(correctCount, hasBonus) {
    if (correctCount === 6) {
      return "6개 일치 (2,000,000,000원)";
    }
    if (correctCount === 5 && hasBonus) {
      return "5개 일치, 보너스 볼 일치 (30,000,000원)";
    }
    if (correctCount === 5) {
      return "5개 일치 (1,500,000원)";
    }
    if (correctCount === 4) {
      return "4개 일치 (50,000원)";
    }
    if (correctCount === 3) {
      return "3개 일치 (5,000원)";
    }
    return "None";
  }
}

export default LottoPrizeEvaluator;
