import { Console } from '@woowacourse/mission-utils';
import { winningLottoCountPrice, lottoMesaage, statisticsMesssage, numbers} from './constants.js';

export default class ViweOutput {

    static printText(content) {
        Console.print(content);
    }
    
    static printLottoList(LottoList) {
        LottoList.forEach(lotto => {
            Console.print(lotto);
        });
    }

    static printStatistics(statisticsCountMap) {
        winningLottoCountPrice.forEach((lotto) => {
            let matchCount = `${lotto.count}${statisticsMesssage.PRINT_MATCH}`;
            if(lotto.count === numbers.FIVE_BONUS)
                matchCount = `${numbers.FIVE}${statisticsMesssage.PRINT_MATCH}, ${statisticsMesssage.PRINT_BONUS}`;
            this.printText(
                `${matchCount} ${statisticsMesssage.OPENING_PARENTHESIS}${lotto.price}${statisticsMesssage.CLOSING_PARENTHESIS} ${statisticsMesssage.PRINT_BAR} ${statisticsCountMap.get(lotto.count)}${lottoMesaage.PRINT_COUNT}`
            );       
        });
    }
}