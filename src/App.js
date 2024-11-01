import LotteryMachine from "./LotteryMachine.js";
import {INPUT} from "./constants/message.js";
import {Console, MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
    quantity;
    lotto;

    async run() {
        let sequence = 1;
        for (const prompt of INPUT) {
            const input = await this.input(prompt)
            if (sequence === 1) {
                this.quantity = this.moneyToLotto(input)
            }
            if (sequence === 2) {
                this.lotto = this.purchaseNumbers()
            }
            /*if (this.sequence === 3) {//보너스 번호

            }*/
            sequence++
        }
    }

    moneyToLotto(money) {
        return Number(money) / 1000 //로또 가격 상수화 예정
    }

    purchaseNumbers() { //인자로 몇번인지를 넣자
        let arr = []
        for (let i = 0; i < this.quantity; i++) {
            const sixRandomValues = this.getSixRandomValues()
            arr.push(sixRandomValues)
        }
        console.log(arr)
        return arr
    }

    getSixRandomValues() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
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
