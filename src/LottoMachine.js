import Lotto from "./Lotto.js"
import LottoNumberGenerator from "./LottoNumberGenerator.js"
import { CONSTANTS } from "./Utils/Constants.js";
import { Console } from '@woowacourse/mission-utils';

export default class LottoMachine {

    constructor(purchaseAmount) {
        this.purchaseAmount = purchaseAmount
        this.numberOfPurchase = this.purchaseAmount / CONSTANTS.LOTTO_PRICE;
        this.lottos = this.buyLotto(this.numberOfPurchase);
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
}