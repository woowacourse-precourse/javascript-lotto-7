import {ERROR_CODE} from "../../constants/message.js";

export const purchaseValid = (value) => {
    if (value === null) {
        throw new Error(ERROR_CODE.PURCHASE_HAS_SPACE)
    }
    if (isNaN(value)) {
        throw new Error(ERROR_CODE.PURCHASE_NOT_NUMBER)
    }
    if (value <= 0) {
        throw new Error(ERROR_CODE.PURCHASE_NOT_POSITIVE_NUMBER)
    }
    if (value % 1000 !== 0) {
        throw new Error(ERROR_CODE.PURCHASE_NOT_DIVISION)
    }
    if (value > Number.MAX_SAFE_INTEGER) {
        throw new Error(ERROR_CODE.PURCHASE_MAX_INTEGER)
    }
    return true
}
export const lottoValid = (numbers) => {
    if (numbers.length !== 6) {
        throw new Error(ERROR_CODE.LOTTO_NOT_SIX)
    }
    if (numbers.some((number) => isNaN(number))) {
        throw new Error(ERROR_CODE.LOTTO_NAN)
    }
    if (numbers.some((number) => number === null)) {
        throw new Error(ERROR_CODE.LOTTO_HAS_SPACE)
    }
    if (new Set(numbers).size < numbers.length) {
        throw new Error(ERROR_CODE.LOTTO_OVERLAP)
    }
    if (numbers.some((number) => number > 45 || number <= 0)) {
        throw new Error(ERROR_CODE.LOTTO_INVALID)
    }
    if (numbers.some((number) => number % 1 !== 0)) {
        throw new Error(ERROR_CODE.LOTTO_DECIMAL)
    }
    return true
}


export const bonusNumValid = (numbers, bonusNumber) => {
    if (bonusNumber === null) {
        throw new Error(ERROR_CODE.BONUS_NUM_HAS_SPACE)
    }
    if (numbers.includes(bonusNumber)) {
        throw new Error(ERROR_CODE.BONUS_NUM_OVERLAP)
    }
    if (isNaN(bonusNumber)) {
        throw new Error(ERROR_CODE.BONUS_NUM_NAN)
    }
    if (bonusNumber > 45 || bonusNumber <= 0) {
        throw new Error(ERROR_CODE.BONUS_NUM_INVALID)
    }
    if (bonusNumber > Number.MAX_SAFE_INTEGER) {
        throw new Error(ERROR_CODE.BONUS_NUM_MAX_INTEGER)
    }
    if (bonusNumber % 1 !== 0) {
        throw new Error(ERROR_CODE.BONUS_NUM_DECIMAL)
    }
    return true
}
