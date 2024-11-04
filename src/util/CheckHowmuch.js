import PrintResult from '../output/PrintResult.js';

class CheckHowmuch {
  static run(lottos, winningNumbers, bonus) {
    const matchCounts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    let totalPrize = 0;

    lottos.forEach((lotto) => {
      let count = 0;
      let bonusCount = 0;

      lotto.forEach((number) => {
        if (winningNumbers.includes(number)) {
          count++;
        }
        if (bonus === number) {
          bonusCount = 1;
        }
      });

      if (count === 3) {
        matchCounts[3]++;
        totalPrize += 5000;
        return;
      }
      if (count === 4) {
        matchCounts[4]++;
        totalPrize += 50000;
        return;
      }
      if (count === 5 && bonusCount === 0) {
        matchCounts[5]++;
        totalPrize += 1500000;
        return;
      }
      if (count === 5 && bonusCount === 1) {
        matchCounts[5.5]++;
        totalPrize += 30000000;
        return;
      }
      if (count === 6) {
        matchCounts[6]++;
        totalPrize += 2000000000;
        return;
      }
    });

    const totalSpent = lottos.length * 1000;
    const totalYield = (totalPrize / totalSpent) * 100;
    PrintResult.printResult(matchCounts, totalYield);
  }
}

export default CheckHowmuch;