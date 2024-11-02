import {PURCHASE_PRICE, ERROR_CODE} from "../constants/constants.js";

export const validationCheck = {
    isPositiveNumber(number) {
        if (!/^[1-9]\d*$/.test(number)) {
            throw new Error(ERROR_CODE.NOT_POSITIVE_NUMBER)
        }
        return Number(number);
    },
    isInRange(number, minValue = 1, maxValue = Number.MAX_SAFE_INTEGER) {
        if (!(Number(number) <= maxValue && Number(number) >= minValue)) {
            throw new Error(ERROR_CODE.OUT_OF_RANGE(minValue, maxValue));
        }
        return Number(number);
    },
    isDividedNumberByValue(number, value) {
        if (number % value !== 0) {
            throw new Error(ERROR_CODE.NOT_DIVIDED_BY_VALUE(value))
        }
        return Number(number);
    }
}
