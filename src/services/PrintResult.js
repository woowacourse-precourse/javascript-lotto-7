import { Console } from "@woowacourse/mission-utils";

class PrintResult {
    constructor(winningPrizeTable) {
        this.winningPrizeTable = winningPrizeTable;
    }

    printingResult() {
        Console.print('\n당첨 통계\n---')
        Object.keys(this.winningPrizeTable.winningPrizeTable).forEach(key => {
            const count = this.winningPrizeTable.winningPrizeTable[key];
            Console.print(`${key} - ${count}개`);
        });
    }
    
}

export default PrintResult;
