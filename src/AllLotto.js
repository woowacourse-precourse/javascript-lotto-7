import { MissionUtils } from "@woowacourse/mission-utils"
import Lotto from "./Lotto.js";

const AMOUNT_PER_MATCH = {
    '3': 5000,
    '4': 50000,
    '5': 1500000,
    '5+': 30000000,
    '6': 2000000000,
}


class AllLotto extends Lotto {
    #inputLottos;
    #winningLotto;
    #bonusNumber;
    #winningCountMap;
    #totalPurchaseAmount;
    #totalAvenue;

    constructor() {
        super();
        this.#inputLottos = [];
        this.#winningLotto = null;
        this.#bonusNumber = null;
        this.#winningCountMap = {
            '3': 0,
            '4': 0,
            '5': 0,
            '5+': 0,
            '6': 0,
        }
        this.#totalPurchaseAmount = 0;
        this.#totalAvenue = 0;
    }
    addInputLotto(numbers) {
        const lotto = new Lotto(numbers);
        this.#inputLottos.push(lotto);
    }
    setWinningLotto(winningNumbers, bonusNumber) {
        this.#winningLotto = new Lotto(winningNumbers);
        this.#bonusNumber = bonusNumber;
    }
    compareLottos() {
        this.#inputLottos.forEach((lotto) => {
            const userNumbers = lotto.getNumbers();
            const matchCount = this.#countMatches(userNumbers);
            const hasBonus = this.#hasBonusNumber(userNumbers);

            this.#updateWinningCount(matchCount, hasBonus);
        })
    }

    #countMatches(userNumbers) {
        const winningNumbers = this.#winningLotto.getNumbers();
        return winningNumbers.filter((num) => userNumbers.includes(num)).length;
    }

    #hasBonusNumber(userNumbers) {
        return userNumbers.includes(this.#bonusNumber);
    }

    #updateWinningCount(matchCount, hasBonus) {
        if (matchCount === 6) {
            this.#winningCountMap['6'] += 1;
        } else if (matchCount === 5 && hasBonus) {
            this.#winningCountMap['5+'] += 1;
        } else if (matchCount >= 3) {
            this.#winningCountMap[String(matchCount)] += 1;
        }
    }

    #calculateTotalAvenue() {
        Object.keys(this.#winningCountMap).forEach((key) => {
            const count = this.#winningCountMap[key];
            const amount = AMOUNT_PER_MATCH[key];
            this.#totalAvenue += count * amount;
        });
    }

    #calculatePurchaseAmount() {
        this.#totalPurchaseAmount = this.#inputLottos.length * 1000;
    }


    printAllLotto() {
        const length = this.#inputLottos.length;
        MissionUtils.Console.print(`${length}개를 구매했습니다.`);
        this.#inputLottos.forEach((lotto) => MissionUtils.Console.print(lotto));
    }

    printWinningResult() {
        this.#calculatePurchaseAmount();
        this.#calculateTotalAvenue();

        this.#printHeader();
        this.#printWinningDetails();
        this.#printRevenueRate();
    }

    #printHeader() {
        MissionUtils.Console.print('당첨 통계\n');
        MissionUtils.Console.print('---\n');
    }

    #printWinningDetails() {
        for (let key in this.#winningCountMap) {
            const count = this.#winningCountMap[key];
            const prize = AMOUNT_PER_MATCH[key].toLocaleString();
            if (key === '5+') {
                MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${prize}원) - ${count}개\n`);
            } else {
                MissionUtils.Console.print(`${key}개 일치 (${prize}원) - ${count}개\n`);
            }
        }
    }

    #printRevenueRate() {
        const revenueRate = ((this.#totalAvenue / this.#totalPurchaseAmount) * 100).toFixed(1);
        MissionUtils.Console.print(`총 수익률은 ${revenueRate}%입니다.`);
    }
}

export default AllLotto;