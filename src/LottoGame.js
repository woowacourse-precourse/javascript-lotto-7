import {Random} from "@woowacourse/mission-utils";
import {userInput} from "./util/Input.js";
import {countOutput, lottosOutput, resultOutput} from "./util/OutPut.js";
import {INPUT_MESSAGE} from "./util/Message.js";
import {validAmount, validBonus} from "./util/Validator.js";
import Lotto from "./Lotto.js";

class LottoGame {
    lottos = [];
    matchLottos = {
        '3': 0,
        '4': 0,
        '5': 0,
        '5_BONUS': 0,
        '6': 0,
    };

    async start() {
        const AMOUNT = await userInput(INPUT_MESSAGE.AMOUNT_INPUT);
        validAmount(AMOUNT);

        countOutput(AMOUNT);
        this.generateLotto(AMOUNT / 1000);
        lottosOutput(AMOUNT, this.lottos);

        const WINNING_LOTTO_INPUT = await userInput(INPUT_MESSAGE.WINNING_LOTTO_INPUT);
        const lotto = new Lotto(WINNING_LOTTO_INPUT);
        const WINNING_LOTTO = lotto.winningNumbers;
        const BONUS = await userInput(INPUT_MESSAGE.BONUS_INPUT);
        validBonus(BONUS, WINNING_LOTTO);

        this.matchLotto(BONUS, WINNING_LOTTO);
        resultOutput(this.matchLottos);
    }

    generateLotto(count) {
        for (let i = 0; i < count; i++) {
            let lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            this.lottos.push(lotto);
        }
    }

    matchLotto(bonus, winningLotto) {
        for (let i = 0; i < this.lottos.length; i++) {
            let matchCount = winningLotto.filter(num => this.lottos[i].includes(Number(num))).length;
            let matchBonus = this.lottos[i].some(num => num === Number(bonus));

            if (matchBonus && matchCount === 5) {
                this.matchLottos['5_BONUS'] += 1;
            } else if (matchCount >= 3) {
                this.matchLottos[matchCount] += 1;
            }
        }
    }
}

export default LottoGame;