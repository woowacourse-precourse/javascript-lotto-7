import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/Messages.js";
import Lotto from "../models/Lotto.js";

class OutputView {
    async outputLottoCount(lottoCount) {
        return Console.print(`\n${lottoCount}${CONSOLE_MESSAGE.OUTPUT_LOTTO_COUNT}`);
    }

    async outputLotto(lotto) {
        return Console.print(lotto.getNumbers());
    }
}

export default OutputView;