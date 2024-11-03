import * as numberConfig from '../config/numberConfig.js'

class LottoAmount {
    #amount;

    constructor(amount) {
        this.#validateMinAmount(amount);
        this.#validateUnitAmount(amount);
        this.#amount = amount;
    }

    getAmount() {
        return this.#amount;
    }
    
    #validateMinAmount(amount) {
        if (amount < numberConfig.LOTTO_AMOUNT_UNIT) {
        throw new Error('\n[ERROR] 1,000원부터 입력할 수 있습니다.');
        }
    }
    
    #validateUnitAmount(amount) {
        if (!Number.isInteger(amount / numberConfig.LOTTO_AMOUNT_UNIT)) {
        throw new Error('\n[ERROR] 1,000원 단위만 입력할 수 있습니다.');
        }
    }
}

export default LottoAmount;