import {ERROR_CODE, PURCHASE_PRICE} from "../constants/constants.js";
import {validationCheck} from "../validation/validationCheck.js";

export const purchasePriceUtils = {
    validate(purchasePrice) {
        if (!validationCheck.isPositiveNumber(purchasePrice))
            throw new Error(ERROR_CODE.NOT_POSITIVE_NUMBER);
        if (!validationCheck.isInRange(purchasePrice)) {
            throw new Error(ERROR_CODE.OUT_OF_RANGE(1, Number.MAX_SAFE_INTEGER));
        }
        if (!validationCheck.isDividedNumberByValue(purchasePrice, PURCHASE_PRICE.MIN_CURR_UNIT))
            throw new Error(ERROR_CODE.NOT_DIVIDED_BY_VALUE(PURCHASE_PRICE.MIN_CURR_UNIT));
        return Number(purchasePrice);
    },
    getLottoAmount(purchasePrice) {
        return purchasePrice / PURCHASE_PRICE.MIN_CURR_UNIT;
    }
}