import {LOTTO_PRICE, PRIZES} from "../constants/gameConstants.js";
import Lotto from "./Lotto.js";
import NumberGenerator from '../utils/NumberGenerator.js'

class LottoGame {
    #lottos = []
    #winningNumbers = [];
    #bonusNumber = 0;

    purchaseLottos(amount) {
        const count = amount / LOTTO_PRICE
        for (let i = 0; i < count; i++){
            const numbers = NumberGenerator.generateLottoNumbers();
            this.#lottos.push(new Lotto(numbers));
        }
    }

    setWinningNumbers(numbers, bonusNumber) {
        this.#winningNumbers = numbers;
        this.#bonusNumber = bonusNumber;
    }

    getResults() {
        const results = {
            matchThree: 0,
            matchFour: 0,
            matchFive: 0,
            matchFiveBonus: 0,
            matchSix: 0,
            totalPrize: 0,
        };

        this.#lottos.forEach(lotto => {
            const { matchCount, matchBonus } = lotto.match(this.#winningNumbers, this.#bonusNumber);

            switch (matchCount) {
                case 3:
                    results.matchThree++;
                    results.totalPrize += PRIZES.FIFTH.prize
                    break;
                case 4:
                    results.matchFour++;
                    results.totalPrize += PRIZES.FOURTH.prize
                    break;
                case 5:
                    if (matchBonus) {
                        results.matchFiveBonus++;
                        results.totalPrize += PRIZES.SECOND.prize
                    } else {
                        results.matchFive++;
                        results.totalPrize += PRIZES.THIRD.prize
                    }
                    break;
                case 6:
                    results.matchSix++;
                    results.totalPrize += PRIZES.FIRST.prize
                    break;
            }
        });

        return results;
    }

    getLottos() {
        return this.#lottos.map(lotto => lotto.getNumbers());
    }
}