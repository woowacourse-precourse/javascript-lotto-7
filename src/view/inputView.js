import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from '../config/messageConfig.js';

class InputView {
    async inputLottoAmount() {
        return await Console.readLineAsync(INPUT_MESSAGE.LOTTO_AMOUNT);
    }
    async inputWinningNumbers() {
        return await Console.readLineAsync(INPUT_MESSAGE.LOTTO_WINNING_NUMBERS);
    }
    async inputBonusNumber() {
        return await Console.readLineAsync(INPUT_MESSAGE.LOTTO_BONUS_NUMBER);
    }
}

export default InputView;