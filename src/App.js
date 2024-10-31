import LotteryMachine from "./LotteryMachine.js";
import {INPUT} from "./constants/message.js";
import {Console} from "@woowacourse/mission-utils";

class App {
    async run() {
        const input = await this.input(INPUT.PURCHASE)
        try {
            new LotteryMachine(input)
        } catch (e) {
            throw new Error("[Error]")
        }
    }

    async input(message) {
        return await Console.readLineAsync(message)
    }
}

export default App;
