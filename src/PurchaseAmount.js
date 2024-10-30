import { MissionUtils } from "@woowacourse/mission-utils"

class PurchaseAmount {
    #amount;
    constructor(amount) {
        this.#validate(amount);
        this.#amount = amount;
    }

    #validate(amount) {
        this.#validateIsNumber(amount);
        this.#validateIsPositive(amount);
        this.#validateIsMultipleOfThousand(amount);
    }

    #validateIsNumber(amount) {
        if (isNaN(amount)) {
            throw new Error("[ERROR] 구입금액을 숫자로 입력해주세요.")
        }
    }

    #validateIsMultipleOfThousand(amount) {
        if (amount % 1000 !== 0) {
            throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.");
        }
    }

    #validateIsPositive(amount) {
        if (amount <= 0) {
            throw new Error("[ERROR] 구입금액은 0보다 커야 합니다.")
        }
    }

    getLottoCount() {
        const LOTTO_COUNT = this.#amount / 1000;
        MissionUtils.Console.print(`\n${LOTTO_COUNT}개를 구매했습니다.`);
        return LOTTO_COUNT;
    }
}

export default PurchaseAmount;