class PurchaseAmount {
    #amount;
    constructor(amount) {
        this.#validate(amount);
        this.#amount = amount;
    }

    #validate(amount) {
        if (!isNaN(amount)) {
            throw new Error("[ERROR] 구입금액을 숫자로 입력해주세요.")
        }

        if (amount % 1000 !== 0) {
            throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.");
        }
    }
}