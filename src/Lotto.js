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
}

export default Lotto;
