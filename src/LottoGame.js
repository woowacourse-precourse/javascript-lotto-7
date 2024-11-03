import {userInput} from "./util/Input.js";
import {INPUT_MESSAGE} from "./util/Message.js";
import {validAmount} from "./util/Validator.js";
import Lotto from "./Lotto.js";

class LottoGame {

    async start() {
        const AMOUNT = await userInput(INPUT_MESSAGE.AMOUNT_INPUT);
        validAmount(AMOUNT);
        const WINNING_LOTTO = await userInput(INPUT_MESSAGE.WINNING_LOTTO_INPUT);
        const lotto = new Lotto(WINNING_LOTTO);
        const BONUS = await userInput(INPUT_MESSAGE.BONUS_INPUT);

    }
}

export default LottoGame;