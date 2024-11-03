import {userInput} from "./util/Input.js";
import {INPUT_MESSAGE} from "./util/Message.js";
import {validAmount, validBonus} from "./util/Validator.js";
import Lotto from "./Lotto.js";

class LottoGame {

    async start() {
        const AMOUNT = await userInput(INPUT_MESSAGE.AMOUNT_INPUT);
        validAmount(AMOUNT);
        const WINNING_LOTTO_INPUT = await userInput(INPUT_MESSAGE.WINNING_LOTTO_INPUT);
        const lotto = new Lotto(WINNING_LOTTO_INPUT);
        const WINNING_LOTTO = lotto.winningNumbers.split(',');
        const BONUS = await userInput(INPUT_MESSAGE.BONUS_INPUT);
        validBonus(BONUS, WINNING_LOTTO);
    }
}

export default LottoGame;