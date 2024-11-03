import {Console} from '@woowacourse/mission-utils'
import {ERROR_CODE, LOTTO} from "./constants/constants.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error(ERROR_CODE.LOTTO_SIZE_OUT_OF_RANGE(LOTTO.SIZE));
        }
        if (new Set(numbers).size !== numbers.length) {
            throw new Error(ERROR_CODE.LOTTO_NUMBER_DUPLICATE);
        }
    }

    print() {
        Console.print(this.#numbers);
    }
}

export default Lotto;
