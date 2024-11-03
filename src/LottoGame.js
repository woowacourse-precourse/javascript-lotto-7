import {Random} from "@woowacourse/mission-utils";
import {userInput} from "./util/Input.js";
import {countOutput, lottosOutput} from "./util/OutPut.js";
import {INPUT_MESSAGE, OUTPUT_MESSAGE} from "./util/Message.js";
import {validAmount, validBonus} from "./util/Validator.js";
import Lotto from "./Lotto.js";

class LottoGame {
    lottos = [];

    async start() {
        const AMOUNT = await userInput(INPUT_MESSAGE.AMOUNT_INPUT);
        validAmount(AMOUNT);

        countOutput(AMOUNT, OUTPUT_MESSAGE.COUNT);
        this.generateLotto(AMOUNT / 1000);
        lottosOutput(AMOUNT, this.lottos);

        const WINNING_LOTTO_INPUT = await userInput(INPUT_MESSAGE.WINNING_LOTTO_INPUT);
        const lotto = new Lotto(WINNING_LOTTO_INPUT);
        const WINNING_LOTTO = lotto.winningNumbers.split(',');
        const BONUS = await userInput(INPUT_MESSAGE.BONUS_INPUT);
        validBonus(BONUS, WINNING_LOTTO);
    }

    generateLotto(count) {
        for (let i = 0; i < count; i++) {
            let lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            this.lottos.push(lotto);
        }
    }
}

export default LottoGame;