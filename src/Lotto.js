import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES, GENERALS } from "./Constants.js";
import { validateWinningNumbers, validateBonusNumber } from "./Validator.js"

class Lotto {
    #numbers;

    constructor(numbers, bonusNumber) {
        this.#validate(numbers, bonusNumber);
        this.#numbers = numbers;
    }

    #validate(numbers, bonusNumber) {
        validateWinningNumbers(numbers);
        validateBonusNumber(numbers, bonusNumber);
    }

    // TODO: 추가 기능 구현
    static calculateLottoCount(money) {
        return money / GENERALS.LOTTO_PRICE;
    }
    
    static generateLottoNumbers() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }
    
    static printLottos(lottoCount) {
        Console.print(`${lottoCount}개를 구매했습니다.`);
        Array.from({ length: lottoCount }).forEach(() => {
            const lottoNumbers = this.generateLottoNumbers().sort((a, b) => a - b);
            Console.print(`[${lottoNumbers.join(', ')}]`);
        });
    }
    
    static issueLottos(money) {
        const lottoCount = this.calculateLottoCount(money);
        this.printLottos(lottoCount);
    }

}

export default Lotto;