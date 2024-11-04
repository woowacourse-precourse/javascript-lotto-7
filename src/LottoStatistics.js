import { Console } from '@woowacourse/mission-utils';

class LottoStatistics {
    constructor() {
        this.statistics = {
            match3: 0,
            match4: 0,
            match5: 0,
            match5Bonus: 0,
            match6: 0,
        };
        this.totalPrize = 0;
    }

    // 당첨 통계 계산
    calculateStatistics(lottos, winningNumbers, bonusNumber) {

        lottos.forEach(lotto => {
            const matchingCount = lotto.checkWinning(winningNumbers, bonusNumber);

            switch (matchingCount) {
                case "1등":
                    this.statistics.match6++;
                    this.totalPrize += 2000000000;
                    break;
                case "2등":
                    this.statistics.match5Bonus++;
                    this.totalPrize += 30000000;
                    break;
                case "3등":
                    this.statistics.match5++;
                    this.totalPrize += 1500000;
                    break;
                case "4등":
                    this.statistics.match4++;
                    this.totalPrize += 50000;
                    break;
                case "5등":
                    this.statistics.match3++;
                    this.totalPrize += 5000;
                    break;
                default:
                    break;
            }
        });
    }

    // 수익률 계산
    calculateProfitRate(totalAmountSpent) {
        const profitRate = (this.totalPrize / totalAmountSpent) * 100; 
    
        return profitRate.toFixed(1); 
    }

    // 통계 출력
    printStatistics(totalAmountSpent) {
        Console.print("\n당첨 통계");
        Console.print("---");
        Console.print(`3개 일치 (5,000원) - ${this.statistics.match3}개`);
        Console.print(`4개 일치 (50,000원) - ${this.statistics.match4}개`);
        Console.print(`5개 일치 (1,500,000원) - ${this.statistics.match5}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.statistics.match5Bonus}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${this.statistics.match6}개`);
        
        const profitRate = this.calculateProfitRate(totalAmountSpent);
        Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }
}

export default LottoStatistics;
