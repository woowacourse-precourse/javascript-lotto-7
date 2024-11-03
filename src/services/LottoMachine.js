import {MissionUtils} from "@woowacourse/mission-utils";

class LottoMachine {
    #number

    constructor(number) {
        this.#validate(number);
        this.number = number
    }

    #validate(purchase) { //함수로 나중에 분리
        if (isNaN(purchase)) {
            throw new Error("[Error]")
        }
    }
    purchaseNumbers(lottoQuantity) { //인자로 몇번인지를 넣자
        let arr = []
        for (let i = 0; i < lottoQuantity; i++) {
            const sixRandomValues = this.getSixRandomValues()
            arr.push(sixRandomValues)
        }
        console.log(arr)
        return arr
    }

    getSixRandomValues() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }
}

export default LottoMachine