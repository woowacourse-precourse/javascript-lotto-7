import PurchaseAmountError from "../errors/PurchaseAmountError.js";
import { ERROR_MESSAGE } from "../constants/errorMessages.js";

class PurchaseAmount {

    static AMOUNT_UNIT = 1000;

    #purchaseAmount;

    constructor(purchaseAmount) {
        this.#purchaseAmount = purchaseAmount;
        this.#validate();
    }

    static getPurchaseAmount(purchaseAmount) {
        const purchaseAmountInstantce = new PurchaseAmount(purchaseAmount);
        return purchaseAmountInstantce.#purchaseAmount / PurchaseAmount.AMOUNT_UNIT;
    }

    #validate() {
        this.validateAmountNotEmpty();
        this.validateAmountNumeric();
        this.validateAmountMultiple();
        this.validateAmountMinimum();
    }

    validateAmountNotEmpty() {
        if(/\s/.test(this.#purchaseAmount) || this.#purchaseAmount === '') {
            throw new PurchaseAmountError(ERROR_MESSAGE.input_is_empty);
        }
    }

    validateAmountNumeric() {
        if(isNaN(Number(this.#purchaseAmount))) {
            throw new PurchaseAmountError(ERROR_MESSAGE.input_purchase_amount_minimum);
        }
    }

    validateAmountMultiple() {
        if(Number(this.#purchaseAmount) % PurchaseAmount.AMOUNT_UNIT !== 0) {
            throw new PurchaseAmountError(ERROR_MESSAGE.input_purchase_amount_multiple);
        }
    }

    validateAmountMinimum() {
        if(Number(this.#purchaseAmount) < PurchaseAmount.AMOUNT_UNIT) {
            throw new PurchaseAmountError(ERROR_MESSAGE.input_purchase_amount_minimum);
        }
    }

}

export default PurchaseAmount;