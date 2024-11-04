import {Console} from '@woowacourse/mission-utils';

class ResultCalculator {
    constructor(lottos, winningNumbers, bonusNumber) {
        this.lotto = lottos;
        this.winningNumbers = winningNumbers;
        this.bonusNumber = bonusNumber;
        this.matchCounts = {3:0, 4:0, 5:0, 6:0, '5+bonus:':0};
        this.calculateResults();
    }

    calculateResults(){
        this.lottos.forEach((lotto) => {
            const matchedCount = this.countMatches(lotto.getNumbers());
            this.updateMatchCounts(matchedCount, lotto);
        });
    }

    countMatches(numbers){
        return numbers.filter((num) => this.winningNumbers.includes(num)).length;
    }

    updateMatchCounts(matchedCount, lotto){
        if(matchedCount === 6) this.matchCount[6]++;
        else if (matchedCount === 5 && lotto.getNumbers().includes(this.bonusNumber))
            this.matchCounts['5+bonus']++;
        else if (matchedCount === 5) this.matchCounts[5]++;
        else if (matchedCount === 4) this.matchCounts[4]++;
        else if (matchedCount === 3) this.matchCounts[3]++;
    }

    printResults() {
        Console.print("당첨 통계\n---");
        Console.print(`3개 일치 (5,000원) - ${this.matchCounts[3]}개`);
        Console.print(`4개 일치 (50,000원) - ${this.matchCounts[4]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${this.matchCounts[5]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.matchCounts['5+bonus']}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${this.matchCounts[6]}개`);
        
        const totalPrize = this.calculateTotalPrize();
        const profitRate = ((totalPrize / (this.lottos.length * 1000)) * 100).toFixed(1);
        Console.print(`총 수익률은 ${profitRate}%입니다.`);
      }

    calculateTotalPrize(){
        return (this.matchCounts[3] * 5000) +
            (this.matchCounts[4] * 50000) +
            (this.matchCounts[5] * 1500000) +
            (this.matchCounts['5+bonus'] * 30000000) +
            (this.matchCounts[6] * 2000000000);
    }
}

export default ResultCalculator;
