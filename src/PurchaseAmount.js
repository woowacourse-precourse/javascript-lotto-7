import { MESSAGES } from "./constants.js";

class PurchaseAmount {
    #amount;

    constructor(amount) {
        this.#amount = this.#validate(amount);
    }

    #validate(amount) {
        const purchaseAmountValue = Number(amount);
        if (isNaN(purchaseAmountValue)) throw new Error(MESSAGES.ERROR.PURCHASE_AMOUNT_NOT_NUMBER);
        if (purchaseAmountValue < 0) throw new Error(MESSAGES.ERROR.PURCHASE_AMOUNT_NEGATIVE_NUMBER);
        if (!Number.isInteger(purchaseAmountValue)) throw new Error(MESSAGES.ERROR.PURCHASE_AMOUNT_FLOATING_POINT_NUMBER);
        if (purchaseAmountValue === 0) throw new Error(MESSAGES.ERROR.PURCHASE_AMOUNT_ZERO_OR_WHITESPACE);
        if (purchaseAmountValue < 1000) throw new Error(MESSAGES.ERROR.PURCHASE_AMOUNT_BELOW_MINIMUM);
        if (purchaseAmountValue > 100000) throw new Error(MESSAGES.ERROR.PURCHASE_AMOUNT_TOO_LARGE);
        if (purchaseAmountValue % 1000 !== 0) throw new Error(MESSAGES.ERROR.PURCHASE_AMOUNT_NOT_DIVISIBLE_BY_1000);

        return purchaseAmountValue;
    }

    getAmount() {
        return this.#amount;
    }
}

export default PurchaseAmount;