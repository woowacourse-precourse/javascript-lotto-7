import Lotto from "./Lotto.js";

const PRIZE_AMOUNTS = [2000000000, 30000000, 1500000, 50000, 5000];

const PRICE_PER_LOTTO = 1000;

export default class LottoGame {
    #purchaseAmount;

    constructor(purchaseAmount) {
        this.#validatePurchaseAmount(purchaseAmount);
        this.#purchaseAmount = purchaseAmount;
    }

    #validatePurchaseAmount(stringAmount) {
        const numberAmount = parseInt(stringAmount.trim());
        
        if(Number.isNaN(numberAmount)) {
            throw new Error('[ERROR] 구입 금액에 숫자를 입력해주세요.');
        }
    
        if((numberAmount % PRICE_PER_LOTTO)) {
            throw new Error('[ERROR] 구입 금액을 1000원 단위로 입력해주세요.');
        }
    }
}