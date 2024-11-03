import {PURCHASE_PRICE} from "../constants/constants.js";

export const purchasePriceUtils = {
    getLottoAmount(purchasePrice) {
        return purchasePrice / PURCHASE_PRICE.MIN_CURR_UNIT;
    }
}