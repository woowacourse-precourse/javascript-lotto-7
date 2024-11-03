import Lotto from "./Lotto.js"
import LottoNumberGenerator from "./LottoNumberGenerator.js"
import { CONSTANTS } from "./Utils/Constants.js";
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
        for(let i = 1; i <= numberOfPurchase ; i++) {
            lottos.push(new Lotto(LottoNumberGenerator.generate()));
        }

        return lottos
    }

    printNumberofPurchase() {
        Console.print(`\n${this.numberOfPurchase}개를 구매했습니다.`);
    }

    printLotto() {
        this.lottos.map(lotto => Console.print(lotto.getNumbers()));
    }

    setWinningNumber(winningNumber, bonusNumber) {
        this.winningNumber = winningNumber;
        this.bonusNumber = bonusNumber;
    }

    
    checkWinningLotto() {
        let totalWinningAmount = 0;

        this.lottos.forEach(lotto => {
            const winningPrize = this.checkWinningNumber(lotto.getNumbers())
            totalWinningAmount += winningPrize;
        });

    }

    checkWinningNumber(numbers) {

        const matchCount = numbers.filter(num => this.winningNumber.includes(num)).length;
        const hasBonus = numbers.includes(this.bonusNumber);

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER) {
            this.rank[1]++;

            return CONSTANTS.RANKING[1].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER-1 && hasBonus) {
            this.rank[2]++;

            return CONSTANTS.RANKING[2].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER-1) {
            this.rank[3]++;

            return CONSTANTS.RANKING[3].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER-2) {
            this.rank[4]++;

            return CONSTANTS.RANKING[4].prize
        }

        if (matchCount === CONSTANTS.NUMBER_OF_LOTTO_NUMBER-3) {
            this.rank[5]++;

            return CONSTANTS.RANKING[5].prize
        }

        return 0
    }


}