import Lotto from "./Lotto.js"
import LottoNumberGenerator from "./LottoNumberGenerator.js"
import { CONSTANTS, MESSAGE } from "./Utils/Constants.js";
import { Console } from '@woowacourse/mission-utils';

export default class LottoMachine {

    constructor(purchaseAmount) {
        this.purchaseAmount = purchaseAmount
        this.numberOfPurchase = this.purchaseAmount / CONSTANTS.LOTTO_PRICE;
        this.lottos = this.buyLotto(this.numberOfPurchase);
        this.rank = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
    }

    buyLotto(numberOfPurchase) {
        const lottos = []
        for (let i = 1; i <= numberOfPurchase; i++) {
            lottos.push(new Lotto(LottoNumberGenerator.generate()));
        }

        return lottos
    }

    printNumberofPurchase() {
        Console.print(`${this.numberOfPurchase}개를 구매했습니다.`);
    }

    printLotto() {
        this.lottos.map(lotto => Console.print(`[${lotto.getNumbers().join(', ')}]`));
    }

    setWinningNumber(winningNumber, bonusNumber) {
        this.winningNumber = winningNumber;
        this.bonusNumber = bonusNumber[0];
    }


    checkWinningLotto() {
        let totalWinningAmount = 0;

        this.lottos.forEach(lotto => {
            const winningPrize = this.checkWinningNumber(lotto.getNumbers())
            totalWinningAmount += winningPrize;
        });

        return totalWinningAmount;
    }

    checkWinningNumber(numbers) {

        const matchCount = numbers.filter(num => this.winningNumber.includes(num)).length;
        const hasBonus = numbers.includes(this.bonusNumber);

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER) {
            this.rank[1]++;

            return CONSTANTS.RANKING[1].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER - 1 && hasBonus) {
            this.rank[2]++;

            return CONSTANTS.RANKING[2].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER - 1) {
            this.rank[3]++;

            return CONSTANTS.RANKING[3].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER - 2) {
            this.rank[4]++;

            return CONSTANTS.RANKING[4].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER - 3) {
            this.rank[5]++;

            return CONSTANTS.RANKING[5].prize
        }

        return 0
    }

    printWinningStatistics() {
        Console.print(MESSAGE.WINNING_STATISTICS);
        Console.print(MESSAGE.LINE);

        for (let i = 5; i >= 1; i--) {
            if (i == 2) {
                Console.print(`${CONSTANTS.RANKING[i].match}개 일치, 보너스 볼 일치 (${CONSTANTS.RANKING[i].prizeString}원) - ${this.rank[i]}개`);
                continue;
            }

            Console.print(`${CONSTANTS.RANKING[i].match}개 일치 (${CONSTANTS.RANKING[i].prizeString}원) - ${this.rank[i]}개`);
        }
    }

    calculatePropit(totalWinningAmount) {
        const propit = (totalWinningAmount / this.purchaseAmount) * 100;

        return Math.round(propit * 100) / 100;
    }

    printPropit(propit) {
        Console.print(`총 수익률은 ${propit}%입니다.`);
    }
}