import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from '../config/messageConfig.js';
import { replaceNumber } from '../util/util.js';

class OutputView {
    outputError(message) {
        Console.print(message);
    }

    outputLottoNumbers(lottoQuantity, allLottoNumbers) {
        Console.print(replaceNumber(OUTPUT_MESSAGE.QUANTITY, lottoQuantity));
        allLottoNumbers.forEach(numbers => Console.print(`[${numbers.join(', ')}]`));
    }

    outputLottoResult(rankCounts, profitRate) { //chat GPT 문자열에 숫자를 대체해서 넣을 수 있는 메서드를 구현하여 해결
        const winningPlace = OUTPUT_MESSAGE.WINNING_PLACE;
        const proFit = OUTPUT_MESSAGE.PROFIT;
        const resultMessage = [
            winningPlace.INTRO,
            replaceNumber(winningPlace.FIFTH_PLACE, rankCounts.fifth),
            replaceNumber(winningPlace.FOURTH_PLACE, rankCounts.fourth),
            replaceNumber(winningPlace.THIRD_PLACE, rankCounts.third),
            replaceNumber(winningPlace.SECOND_PLACE, rankCounts.second),
            replaceNumber(winningPlace.FIRST_PLACE, rankCounts.first),
            replaceNumber(proFit, profitRate)
        ];

        resultMessage.forEach(message => Console.print(message));
      }
}

export default OutputView;