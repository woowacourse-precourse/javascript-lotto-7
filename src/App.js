import LotteryMachine from "./LotteryMachine.js";
import {INPUT} from "./constants/message.js";
import {Console} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
    sequence = 1

    async run() {
        for (const prompt of INPUT) {
            const input = await this.input(prompt)
            const lotto = new Lotto(input.split(","))
            lotto.purchaseNumbers()
            this.sequence++
        }

    }


    async input(message) {
        const input = await Console.readLineAsync(message)
        return this.#validate(input) && input
    }

    #validate(input) { //추후 구현
        return input
    }

}

export default App;
