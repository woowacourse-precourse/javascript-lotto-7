import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES, LOTTERY } from "./Constants.js";
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
        return money / LOTTERY.PRICE;
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

    getMatchCount(lotto) {
        const matchCount =  lotto.filter(num => this.#numbers.includes(num)).length;
        return matchCount;
    }
    
    updateResult(result, matchCount, hasBonus) {
        if (matchCount === 6) {
            result[6]++;
        } else if (matchCount === 5 && hasBonus) {
            result["5+bonus"]++;
        } else if (matchCount === 5) {
            result[5]++;
        } else if (matchCount === 4) {
            result[4]++;
        } else if (matchCount === 3) {
            result[3]++;
        }
    }

    calculateResult() {
        const result = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };
    
        this.issuedLottos.forEach(lotto => {
            const matchCount = this.getMatchCount(lotto);
            const hasBonus = lotto.includes(this.bonusNumber);
            this.updateResult(result, matchCount, hasBonus);
        });
    
        return result;
    }

    getPrizeAmount(matchCount) {
        switch (matchCount) {
            case 6: return LOTTERY.FIRST_PRIZE;
            case "5+bonus": return LOTTERY.SECOND_PRIZE;
            case 5: return LOTTERY.THIRD_PRIZE;
            case 4: return LOTTERY.FOURTH_PRIZE;
            case 3: return LOTTERY.FIFTH_PRIZE;
            default: return 0;
        }
    }
}

export default Lotto;