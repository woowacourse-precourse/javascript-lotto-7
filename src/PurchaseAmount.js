import { MissionUtils } from "@woowacourse/mission-utils"

class PurchaseAmount {
    #amount;
    constructor(amount) {
        this._validate(amount);
        this.#amount = Number(amount);
    }

    _validate(amount) {
        this._validateIsNumber(amount);
        this._validateIsPositive(amount);
        this._validateIsMultipleOfThousand(amount);
    }

    _validateIsNumber(amount) {
        for (let i = 0; i < amount.length; i++) {
            if (amount[i] < '0' || amount[i] > '9') {
                MissionUtils.Console.print('[ERROR] 구입금액을 숫자로 입력해주세요');
                // throw new Error('[ERROR] 구입금액을 숫자로 입력해주세요');
            };
        }
    }

    _validateIsMultipleOfThousand(amount) {
        if (amount % 1000 !== 0) {
            MissionUtils.Console.print("[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.");
            // throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.");
        }
    }

    _validateIsPositive(amount) {
        if (amount <= 0) {
            MissionUtils.Console.print("[ERROR] 구입금액은 0보다 커야 합니다.");
            // throw new Error("[ERROR] 구입금액은 0보다 커야 합니다.")
        }
    }

    getLottoCount() {
        const LOTTO_COUNT = this.#amount / 1000;
        return LOTTO_COUNT;
    }
}

export default PurchaseAmount;