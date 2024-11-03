import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES, LOTTERY } from "./Constants.js";
import { validateWinningNumbers } from "./Validator.js";

class Lotto {
    #numbers;

    constructor(winningNumbers) {
        this.#numbers = winningNumbers.join(',');
        this.#validate(this.#numbers);
        this.bonusNumber = null;
        this.issuedLottos = [];
    }

    #validate(numbers) {
        validateWinningNumbers(numbers);
        this.#numbers = numbers.split(',').map(num => parseInt(num.trim(), 10));
    }

    getBonusNumber(bonusNumber) {
        this.bonusNumber = bonusNumber;
    }

    getIssuedLottos(issuedLottos) {
        this.issuedLottos = issuedLottos;
    }

    static issueLottos(money) {
        const lottoCount = this.calculateLottoCount(money);
        const issuedLottos = this.generateLottoNumbers(lottoCount);
        this.printLottos(issuedLottos);

        return issuedLottos;
    }

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
        Console.print(`\n${issuedLottos.length}개를 구매했습니다.`);
        issuedLottos.forEach(lottoNumbers => {
            Console.print(`[${lottoNumbers.join(', ')}]`);
        });
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
   
    printLottoSummary(result, userMoney) {
        const formattedResult = this.formatResult(result);

        Console.print(MESSAGES.OUTPUT.MATCH_RESULT_BELOW);
        Console.print(formattedResult);
        const profitRate = this.calculateProfitRate(result, userMoney);
        Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }

    formatResult(result) {
        const prizeDetails = [
            { label: MESSAGES.OUTPUT.MATCH_THREE, count: result[3] || 0 },
            { label: MESSAGES.OUTPUT.MATCH_FOUR, count: result[4] || 0 },
            { label: MESSAGES.OUTPUT.MATCH_FIVE, count: result[5] || 0 },
            { label: MESSAGES.OUTPUT.MATCH_FIVE_PLUS_BONUS, count: result["5+bonus"] || 0 },
            { label: MESSAGES.OUTPUT.MATCH_SIX, count: result[6] || 0 }
        ];
    
        let resultString = '';
        prizeDetails.forEach(prize => {
            resultString += `${prize.label} - ${prize.count}개\n`;
        });

        const formattedResult = resultString.trim();    
        return formattedResult;
    }

    getPrizeAmount(matchCount) {
        switch (matchCount) {
            case 3: return LOTTERY.FIFTH_PRIZE;
            case 4: return LOTTERY.FOURTH_PRIZE;
            case 5: return LOTTERY.THIRD_PRIZE;
            case "5+bonus": return LOTTERY.SECOND_PRIZE;
            case 6: return LOTTERY.FIRST_PRIZE;
            default: return 0;
        }
    }

    calculateTotalPrize(result) {
        const totalPrize = Object.entries(result).reduce((total, [matchCount, count]) => {
            if (matchCount !== "5+bonus") {
                matchCount = parseInt(matchCount, 10);
            }
            return total + (count * this.getPrizeAmount(matchCount));
        }, 0);

        return totalPrize;
    }
    
    calculateProfitRate(result, userMoney) {
        const totalPrize = this.calculateTotalPrize(result);
        const profitRate =  ((totalPrize / userMoney) * 100).toFixed(1);

        return profitRate;
    }
}

export default Lotto;