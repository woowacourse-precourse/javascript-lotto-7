import { Console } from '@woowacourse/mission-utils';
import { winningLottoCountPrice, lottoMesaage, statisticsMesssage, number} from './constants.js';

export default class ViweOutput {

    static printText(content) {
        Console.print(content);
    }
    
    static printLottoList(LottoList) {
        LottoList.forEach(lotto => {
            Console.print(`[${lotto.join(', ')}]`);
        });
    }

    static printStatistics(statisticsCountMap) {
        winningLottoCountPrice.forEach((lotto) => {
            const matchCount = this.getMatchCountExpression(lotto);
            this.printText(
                `${matchCount} ${statisticsMesssage.OPENING_PARENTHESIS}${lotto.price}${statisticsMesssage.MONEY_UNIT}${statisticsMesssage.CLOSING_PARENTHESIS} ${statisticsMesssage.PRINT_BAR} ${statisticsCountMap.get(lotto.count)}${lottoMesaage.PRINT_COUNT}`
            );       
        });
    }

    static getMatchCountExpression(lotto) {
        if(lotto.count === number.FIVE_BONUS)
            return `${number.FIVE}${statisticsMesssage.PRINT_MATCH}, ${statisticsMesssage.PRINT_BONUS}`;
        return `${lotto.count}${statisticsMesssage.PRINT_MATCH}`;
    }
}