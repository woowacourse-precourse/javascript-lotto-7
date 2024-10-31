import {Console} from "@woowacourse/mission-utils";
import {INPUT} from "./constants/message.js";

class LotteryMachine {

    async start() {
        await this.input(INPUT.PURCHASE)
        await this.input(INPUT.WINNING_NUMBER)


    }

    async input(message) {
        return await Console.readLineAsync(message)
    }
}

export default LotteryMachine