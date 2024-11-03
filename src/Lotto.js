import {
    PLEASE_INPUT_RIGHT_NUMBER,
    PLEASE_INPUT_UNIQUE_NUMBER,
} from "./constant.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }

        numbers.forEach((number) => {
            if (isNaN(number) || 1 > number || number > 45) {
                throw new Error(PLEASE_INPUT_RIGHT_NUMBER);
            }
        });

        const uniqueNumbers = new Set(numbers);
        if (uniqueNumbers.size !== numbers.length) {
            throw new Error(PLEASE_INPUT_UNIQUE_NUMBER);
        }
    }

    get numbers() {
        return this.#numbers.sort((a, b) => a - b);
    }
}

export default Lotto;
