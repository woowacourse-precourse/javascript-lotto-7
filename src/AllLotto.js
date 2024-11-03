import { MissionUtils } from "@woowacourse/mission-utils";

const AMOUNT_PER_MATCH = {
    '3': 5000,
    '4': 50000,
    '5': 1500000,
    '5+': 30000000,
    '6': 2000000000,
}

const ERROR_MESSAGES = {
    INVALID_BONUS_NUMBER: "[ERROR] 보너스 번호는 숫자로 입력해야 합니다.",
    OUT_OF_RANGE: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다."
};

let ERROR_FLAG = 0;

const KEYS_ARR = ['3', '4', '5', '5+', '6'];

class AllLotto {
    #inputLottos;
    #winningLotto;
    #bonusNumber;
    #winningCountMap;
    #totalPurchaseAmount;
    #totalAvenue;

    constructor() {
        this.#inputLottos = [];
        this.#winningLotto = null;
        this.#bonusNumber = null;
        this.#winningCountMap = {
            '3': 0,
            '4': 0,
            '5': 0,
            '5+': 0,
            '6': 0,
        };
        this.#totalPurchaseAmount = 0;
        this.#totalAvenue = 0;
    }

    addInputLotto(lotto) {
        this.#inputLottos.push(lotto);
    }

    async setWinningLotto(winningNumbers, bonusNumber) {
        this.#winningLotto = winningNumbers;
        await this.#validateBonusNumber(bonusNumber);
        this.#bonusNumber = Number(bonusNumber);
    }

    getWinningLotto() {
        return this.#winningLotto;
    }

    getBonusNumber() {
        return this.#bonusNumber;
    }

    async #validateBonusNumber(bonusNumber) {
        const numBonus = Number(bonusNumber);

        if (isNaN(numBonus)) {
            await MissionUtils.Console.print(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
            ERROR_FLAG = 1;
        }
        if (numBonus < 1 || numBonus > 45) {
            await MissionUtils.Console.print(ERROR_MESSAGES.OUT_OF_RANGE);
            ERROR_FLAG = 1;
        }
    }

    compareLottos() {
        this.#inputLottos.forEach((lotto) => {
            const userNumbers = lotto.getNumbers();
            const matchCount = this.#countMatches(userNumbers);
            const hasBonus = this.#hasBonusNumber(userNumbers);
            this.#updateWinningCount(matchCount, hasBonus);
        });
    }

    #countMatches(userNumbers) {
        const winningNumbers = this.#winningLotto;
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
        } else if (matchCount === 5) {
            this.#winningCountMap['5'] += 1;
        } else if (matchCount === 4) {
            this.#winningCountMap['4'] += 1;
        } else if (matchCount === 3) {
            this.#winningCountMap['3'] += 1;
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

    async printAllLotto() {
        const length = this.#inputLottos.length;
        MissionUtils.Console.print(`\n${length}개를 구매했습니다.`);
        this.#inputLottos.forEach(async (lotto) => await MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`));
    }

    async printWinningResult() {
        if (ERROR_FLAG === 1) return;
        this.#calculatePurchaseAmount();
        await this.compareLottos();
        this.#calculateTotalAvenue();

        await this.printHeader();
        await this.printWinningDetails();
        await this.printRevenueRate();
    }

    async printHeader() {
        await MissionUtils.Console.print('\n당첨 통계');
        await MissionUtils.Console.print('---');
    }

    async printWinningDetails() {
        for (let key of KEYS_ARR) {
            const count = this.#winningCountMap[key];
            const prize = AMOUNT_PER_MATCH[key].toLocaleString();
            if (key === '5+') {
                await MissionUtils.Console.print(String(`5개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`));
            }
            if (key !== '5+') {
                await MissionUtils.Console.print(String(`${key}개 일치 (${prize}원) - ${count}개`));
            }
        }
    }

    async printRevenueRate() {
        const revenueRate = ((this.#totalAvenue / this.#totalPurchaseAmount) * 100).toFixed(1);
        await MissionUtils.Console.print(`총 수익률은 ${revenueRate}%입니다.`);
    }
}

export default AllLotto;
