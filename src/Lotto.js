import {validWinningLotto} from "./util/Validator.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        validWinningLotto(numbers);
    }

    get winningNumbers() {
        return this.#numbers;
    }
}

export default Lotto;
