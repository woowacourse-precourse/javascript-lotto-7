import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/Messages.js";

class OutputView {
    async outputLottoCount(lottoCount) {
        return Console.print(`\n${lottoCount}${CONSOLE_MESSAGE.OUTPUT_LOTTO_COUNT}`);
    }
}

export default OutputView;