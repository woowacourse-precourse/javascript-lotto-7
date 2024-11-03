import OutputHandler from "../handler/OutputHandler.js";

class ResultController {
    constructor() {
        this.outputHandler = new OutputHandler();
    }

    calculateResults(lottos, winningNumber, bonusNumber) {
        const rankCounts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
        lottos.forEach((lotto) => {
            const matchCount = this.getMatchCount(lotto, winningNumber);
            const isBonusMatched = this.isBonusMatched(lotto, bonusNumber);
            this.updateRankCounts(rankCounts, matchCount, isBonusMatched);
        });
        return rankCounts;
    }

    getMatchCount(lotto, winningNumber) {
        return lotto.getNumbers().filter(number => winningNumber.includes(number)).length;
    }

    isBonusMatched(lotto, bonusNumber) {
        return lotto.getNumbers().includes(bonusNumber);
    }

    updateRankCounts(rankCounts, matchCount, isBonusMatched) {
        if (matchCount === 6) rankCounts[6]++;
        if (matchCount === 5 && isBonusMatched) rankCounts[5.5]++;
        if (matchCount === 5 && !isBonusMatched) rankCounts[5]++;
        if (matchCount === 4) rankCounts[4]++;
        if (matchCount === 3) rankCounts[3]++;
    }

    calculateEarnings(rankCounts) {
        const prizeMoney = {
            3: 5000,
            4: 50000,
            5: 1500000,
            5.5: 30000000,
            6: 2000000000
        };
        return Object.entries(rankCounts)
            .reduce((acc, [rank, count]) => acc + prizeMoney[rank] * count, 0);
    }

    calculateRateOfReturn(totalEarnings, lottoMoney) {
        return ((totalEarnings / lottoMoney) * 100).toFixed(1);
    }

    printResults(rankCounts, rateOfReturn) {
        this.outputHandler.printResults(rankCounts, rateOfReturn);
    }

    execute(lottos, winningNumber, bonusNumber, lottoMoney) {
        const rankCounts = this.calculateResults(lottos, winningNumber, bonusNumber);
        const totalEarnings = this.calculateEarnings(rankCounts);
        const rateOfReturn = this.calculateRateOfReturn(totalEarnings, lottoMoney);
        this.printResults(rankCounts, rateOfReturn);
    }
}

export default ResultController;
