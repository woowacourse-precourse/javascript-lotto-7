import {PURCHASE_PRICE} from "../constants/constants.js";
import {validationCheck} from "../validation/validationCheck.js";

export const purchasePriceUtils = {
    validate(purchasePrice) {
        purchasePrice = validationCheck.isPositiveNumber(purchasePrice)
        purchasePrice = validationCheck.isInRange(purchasePrice)
        return validationCheck.isDividedNumberByValue(purchasePrice, PURCHASE_PRICE.MIN_CURR_UNIT)
    },

    getLottoAmount(purchasePrice) {
        return purchasePrice / PURCHASE_PRICE.MIN_CURR_UNIT;
    }
}