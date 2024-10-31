import LotteryMachine from "./LotteryMachine.js";
import {INPUT} from "./constants/message.js";
import {Console} from "@woowacourse/mission-utils";

class App {
    async run() {
        for (const prompt of INPUT) {
            const input = await this.input(prompt)
        }
    }


    async input(message) {
        return await Console.readLineAsync(message)
    }
}

export default App;
