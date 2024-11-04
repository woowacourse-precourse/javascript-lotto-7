class App {
  calculateResults(lottos, winningNumbers, bonusNumber) {
    const results = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach((lotto) => {
      const matchCount = lotto.getMatchCount(winningNumbers);
      const hasBonus = lotto.hasBonusNumber(bonusNumber);

      if (matchCount === 6) results.first++;
      else if (matchCount === 5 && hasBonus) results.second++;
      else if (matchCount === 5) results.third++;
      else if (matchCount === 4) results.fourth++;
      else if (matchCount === 3) results.fifth++;
    });

    return results;
  }

  printResults(results, purchaseAmount) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${results.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results.first}개`);

    const totalPrize =
      results.first * 2000000000 +
      results.second * 30000000 +
      results.third * 1500000 +
      results.fourth * 50000 +
      results.fifth * 5000;
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
