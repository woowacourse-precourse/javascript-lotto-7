import LottoError from "../errors/LottoError.js";
import { ERROR_MESSAGE } from "../constants/errorMessages.js";
import { generateAutoLottoNumbers } from "../utils/generateAutoLottoNumbers.js";

class Lotto {

    static MIN_NUMBER = 1;

    static MAX_NUMBER = 45;

    static LOTTO_NUMVER_COUNT = 6;

    #numbers;

    constructor(numbers) {
        this.#numbers = numbers;
        this.#validate();
    }

    static formatLottoNumbers(lotto) {
        return `[${lotto.join(', ')}]`;
    }

    static getLottos(purchaseLottosCount) {
        const purchaseNumbers = Array.from({ length: purchaseLottosCount }).map(() => {
            const numbers = generateAutoLottoNumbers(Lotto.MIN_NUMBER, Lotto.MAX_NUMBER, Lotto.LOTTO_NUMVER_COUNT).sort((a, b) => a - b);
            return new Lotto(numbers).#numbers;
        });
        return purchaseNumbers;
    }

    #validate() {
        this.validateLottoInRange();
        this.validateLottoIsNumeric();
        this.validateLottoNotNegative();
        this.validateLottoNoDuplicates();
    }

    validateLottoInRange() {
        if(!this.#numbers.every((number) => number >= Lotto.MIN_NUMBER && number <= Lotto.MAX_NUMBER)) {
            throw new LottoError(ERROR_MESSAGE.lotto_in_range);
        }
    }

    validateLottoIsNumeric() {
        if(!this.#numbers.every((number) => typeof number === 'number')) {
            throw new LottoError(ERROR_MESSAGE.lotto_is_numeric);
        }
    }

    validateLottoNotNegative() {
        if(this.#numbers.length > Lotto.LOTTO_NUMVER_COUNT) {
            throw new LottoError(ERROR_MESSAGE.lotto_not_negative);
        }
    }

    validateLottoNoDuplicates() {
        const uniqueNumbers = new Set(this.#numbers);
        if (uniqueNumbers.size !== this.#numbers.length) {
            throw new LottoError(ERROR_MESSAGE.lotto_no_duplicates);
        }
    }
}

export default Lotto;
