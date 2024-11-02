import OutputHandler from "../handler/OutputHandler.js";

class ResultController {
    constructor() {
        this.outputHandler = new OutputHandler();
    }

    calculateResults(lottos, winningNumber, bonusNumber) {
        const rankCounts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
        lottos.forEach((lotto) => {
            const matchCount = lotto.getNumbers().filter(number => winningNumber.includes(number)).length;
            const isBonusMatched = lotto.getNumbers().includes(bonusNumber);
            if (matchCount === 6) rankCounts[6]++;
            else if (matchCount === 5 && isBonusMatched) rankCounts[5.5]++;
            else if (matchCount === 5) rankCounts[5]++;
            else if (matchCount === 4) rankCounts[4]++;
            else if (matchCount === 3) rankCounts[3]++;
        });
        return rankCounts;
    }

    calculateEarnings(rankCounts) {
        const prizeMoney = {
            3: 5000,
            4: 50000,
            5: 1500000,
            5.5: 30000000,
            6: 2000000000
        };
        return Object.entries(rankCounts).reduce((acc, [rank, count]) => acc + prizeMoney[rank] * count, 0);
    }

    calculateRateOfReturn(totalEarnings, lottoMoney) {
        return ((totalEarnings / lottoMoney) * 100).toFixed(1);
    }

    printResults(rankCounts, rateOfReturn) {
        this.outputHandler.printMessage("\n당첨 통계\n---");
        this.outputHandler.printMessage(`3개 일치 (5,000원) - ${rankCounts[3]}개`);
        this.outputHandler.printMessage(`4개 일치 (50,000원) - ${rankCounts[4]}개`);
        this.outputHandler.printMessage(`5개 일치 (1,500,000원) - ${rankCounts[5]}개`);
        this.outputHandler.printMessage(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[5.5]}개`);
        this.outputHandler.printMessage(`6개 일치 (2,000,000,000원) - ${rankCounts[6]}개`);
        this.outputHandler.printMessage(`총 수익률은 ${rateOfReturn}%입니다.`);
    }

    execute(lottos, winningNumber, bonusNumber, lottoMoney) {
        const rankCounts = this.calculateResults(lottos, winningNumber, bonusNumber);
        const totalEarnings = this.calculateEarnings(rankCounts);
        const rateOfReturn = this.calculateRateOfReturn(totalEarnings, lottoMoney);
        this.printResults(rankCounts, rateOfReturn);
    }
}

export default ResultController;
