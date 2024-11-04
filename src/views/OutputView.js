import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/Messages.js";
import Lotto from "../models/Lotto.js";

class OutputView {
    async outputLottoCount(lottoCount) {
        return Console.print(
            `${lottoCount}${CONSOLE_MESSAGE.OUTPUT_LOTTO_COUNT}`
        );
    }

    async outputLotto(lotto) {
        return Console.print(lotto.getNumbers());
    }

    async outputStatistics() {
        return Console.print(CONSOLE_MESSAGE.STATISTICS);
    }

    async outputResult(rankMessage, winningRecord) {
        return Console.print(`${rankMessage} - ${winningRecord}개`);
    }

    async outputProfitRate(profitRate) {
        return Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }

    async outputErrorMessage(errorMesaage) {
        return Console.print(errorMesaage);
    }
}

export default OutputView;
