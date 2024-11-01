import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES, GENERALS } from "./Constants.js";
import { validateWinningNumbers, validateBonusNumber } from "./Validator.js"

class Lotto {
    #numbers;

    constructor(issuedLottos, numbers, bonusNumber) {
        this.#validate(numbers, bonusNumber);
        this.issuedLottos = issuedLottos;
        this.#numbers = numbers;
        this.bonusNumber = bonusNumber;
    }

    #validate(numbers, bonusNumber) {
        validateWinningNumbers(numbers);
        validateBonusNumber(numbers, bonusNumber);
    }

    // TODO: 추가 기능 구현
    static calculateLottoCount(money) {
        return money / GENERALS.LOTTO_PRICE;
    }
    
    static generateLottoNumbers(lottoCount) {
        const issuedLottos =
            Array.from({ length: lottoCount }).map(() => {
                return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            })

        return issuedLottos;
    }
    
    static printLottos(issuedLottos) {
        Console.print(`${issuedLottos.length}개를 구매했습니다.`);
        issuedLottos.forEach(lottoNumbers => {
            Console.print(`[${lottoNumbers.join(', ')}]`);
        });
    }
    
    static issueLottos(money) {
        const lottoCount = this.calculateLottoCount(money);
        const issuedLottos = this.generateLottoNumbers(lottoCount);
        this.printLottos(issuedLottos);

        return issuedLottos;
    }

}

export default Lotto;