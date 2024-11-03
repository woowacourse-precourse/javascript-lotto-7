import { Random } from "@woowacourse/mission-utils";

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

    static generateLottoNumbers(lottoCount) {
        const lottoNumbers = [];
        for (let i = 0; i < lottoCount; i++) {
            const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
            lottoNumbers.push(numbers.sort((a, b) => a - b));
        }
        return lottoNumbers;
    }

    get numbers() {
        return this.#numbers;
    }

    static printLottoNumbers(lottoNumbers) {
        lottoNumbers.forEach(numbers => {
            console.log(numbers);
        });
    }
}

export default Lotto;
