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

    static calculateResults(lottoNumbers, jackpotNumbers, bonusNumber) {
        const results = lottoNumbers.map(numbers => {
            const matchedCount = numbers.filter(num => jackpotNumbers.includes(num)).length;
            const isBonusMatched = matchedCount === 5 && numbers.includes(bonusNumber);
            return { numbers, matchedCount, isBonusMatched };
        });
        return results;
    }

    static calculateRevenue(results) {
        const prize = {
            3: 5000,
            4: 50000,
            5: 1500000,
            5.1: 30000000,
            6: 2000000000,
        };

        const revenue = results.reduce((acc, result) => {
            const { matchedCount, isBonusMatched } = result;

            let key = matchedCount;

            if (isBonusMatched) {
                key = 5.1;
            }
            return acc + (prize[key] || 0);
        }, 0);
        return revenue;
    }

    static calculateRevenuePercent(revenue, spentMoney) {
        const percent = (revenue / spentMoney) * 100;
        return Math.round(percent * 100) / 100;
    }

    static printJackpotStatistics(results, revenuePercent) {
        const statistics = {
            3: 0,
            4: 0,
            5: 0,
            5.1: 0,
            6: 0,
        };

        results.forEach(({ matchedCount, isBonusMatched }) => {
            if (isBonusMatched) {
                statistics[5.1] += 1;
            } else {
                statistics[matchedCount] += 1;
            }
        });

        console.log("당첨 통계");
        console.log("---");
        console.log(`3개 일치 (5,000원) - ${statistics[3]}개`);
        console.log(`4개 일치 (50,000원) - ${statistics[4]}개`);
        console.log(`5개 일치 (1,500,000원) - ${statistics[5]}개`);
        console.log(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics[5.1]}개`);
        console.log(`6개 일치 (2,000,000,000원) - ${statistics[6]}개`);
        console.log(`총 수익률은 ${revenuePercent}%입니다.`);
    }
}

export default Lotto;
