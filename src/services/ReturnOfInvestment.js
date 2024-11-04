import { Console } from "@woowacourse/mission-utils";

class ReturnOfInvestment{
    constructor(winningPrizeTable, costManager){
        this.winningPrizeTable = winningPrizeTable;
        this.costManager = costManager;
    }

    getTotalPrizeMoney() {
        let total = 0;
        Object.entries(this.winningPrizeTable.winningPrizeTable).forEach(([key, count]) => {
            const prizeMoney = this.extractNumberFromParentheses(key);
            total += prizeMoney * Number(count); // 상금 * 개수
        });
        return total;
    }

    extractNumberFromParentheses(input) {
        const regex = /\((.*?)\)/g;
        const match = regex.exec(input);
        if (match) {
            const numberString = match[1].replace(/,/g, '').replace('원', '');
            return Number(numberString);
        }
        return 0;
    }

    calculator(){
        const totalPrize  = this.getTotalPrizeMoney();
        const ReturnOfInvestment = Math.round((totalPrize / this.costManager.cost) * 10000) / 100;
        const formattedROI = `${ReturnOfInvestment.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;        
        Console.print(`총 수익률은 ${formattedROI}입니다.`);
    }

}

export default ReturnOfInvestment;