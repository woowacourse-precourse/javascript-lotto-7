import {userInput} from "./util/Input.js";
import {INPUT_MESSAGE} from "./util/Message.js";
import {vaildAmount} from "./util/Vaildator.js";

class Lotto {
    // #numbers;

    constructor(numbers) {
        // this.#validate(numbers);
        // this.#numbers = numbers;
    }

    // #validate(numbers) {
    //     if (numbers.length !== 6) {
    //         throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    //     }
    // }


    async start() {
        const AMOUNT = await userInput(INPUT_MESSAGE.AMOUNT_INPUT);
        vaildAmount(AMOUNT);
    }

}

export default Lotto;
