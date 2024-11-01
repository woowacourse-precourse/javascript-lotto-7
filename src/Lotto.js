import {MissionUtils} from "@woowacourse/mission-utils";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }


    purchaseNumbers() { //인자로 몇번인지를 넣자
        let arr = []
        for (let i = 0; i < 6; i++) {
            const sixRandomValues = this.getSixRandomValues()
            arr.push(sixRandomValues)
        }
        console.log(arr)
        return arr
    }

    getSixRandomValues() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }


    // TODO: 추가 기능 구현
}

export default Lotto;
