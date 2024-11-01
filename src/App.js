import LotteryMachine from "./LotteryMachine.js";
import {INPUT} from "./constants/message.js";
import {Console} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
    sequence = 1
    price;

    async run() {
        for (const prompt of INPUT) {
            const input = await this.input(prompt)
            if (this.sequence === 1) {
                this.price = this.moneyToLotto(input)
            }
            if (this.sequence === 2) {
                const lotto = new Lotto(input.split(","))
                lotto.purchaseNumbers()
            }
            /*if (this.sequence === 3) {//보너스 번호

            }*/
            this.sequence++
        }
    }

    moneyToLotto(money) {
        return Number(money) / 1000 //로또 가격 상수화 예정
    }


    async input(message) {
        const input = await Console.readLineAsync(message)
        return this.#validate(input) && input
    }

    #validate(input) { //추후 구현
        return input // 로또 1000 나눴을때 나머지 0 아닐때도 고려
    }

}

export default App;
