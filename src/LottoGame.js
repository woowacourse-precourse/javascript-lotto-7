import {Random} from "@woowacourse/mission-utils";
import {amountInput, bonusInput, winningInput} from "./util/Input.js";
import {countOutput, lottosOutput, resultOutput} from "./util/OutPut.js";
import {INPUT_MESSAGE} from "./util/Message.js";

class LottoGame {
    lottos = [];
    matchLottos = {
        '3': 0,
        '4': 0,
        '5': 0,
        '5_BONUS': 0,
        '6': 0,
    };
    lottoRevenue = {
        '3': 5000,
        '4': 50000,
        '5': 1500000,
        '5_BONUS': 30000000,
        '6': 2000000000,
    };
    revenue = 0;

    async start() {
        const AMOUNT = await amountInput(INPUT_MESSAGE.AMOUNT_INPUT);

        countOutput(AMOUNT);
        this.generateLotto(AMOUNT / 1000);
        lottosOutput(AMOUNT, this.lottos);

        const WINNING_LOTTO_INPUT = await winningInput(INPUT_MESSAGE.WINNING_LOTTO_INPUT);

        const BONUS = await bonusInput(INPUT_MESSAGE.BONUS_INPUT, WINNING_LOTTO_INPUT);

        this.matchLotto(BONUS, WINNING_LOTTO_INPUT);
        this.getRevenue(AMOUNT);
        resultOutput(this.matchLottos, this.revenue);
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

    getRevenue(amount) {
        for (const matchLotto in this.matchLottos) {
            this.revenue += this.matchLottos[matchLotto] * this.lottoRevenue[matchLotto];
        }
        let profit = (this.revenue / amount) * 100;
        this.revenue = profit.toFixed(1);

    }
}

export default LottoGame;