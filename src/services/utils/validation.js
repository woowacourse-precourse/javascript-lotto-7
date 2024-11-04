import {ERROR_CODE} from "../../constants/messages.js";

export const purchaseValid = (value) => {
    if (value === null) {
        throw new Error(ERROR_CODE.PURCHASE.HAS_SPACE)
    }
    if (isNaN(value)) {
        throw new Error(ERROR_CODE.PURCHASE.NOT_NUMBER)
    }
    if (value <= 0) {
        throw new Error(ERROR_CODE.PURCHASE.NOT_POSITIVE_NUMBER)
    }
    if (value % 1000 !== 0) {
        throw new Error(ERROR_CODE.PURCHASE.NOT_DIVISION)
    }
    if (value > Number.MAX_SAFE_INTEGER) {
        throw new Error(ERROR_CODE.PURCHASE.MAX_INTEGER)
    }
    return true
}
export const lottoValid = (numbers) => {
    if (numbers.length !== 6) {
        throw new Error(ERROR_CODE.LOTTO.NOT_SIX)
    }
    if (numbers.some((number) => isNaN(number))) {
        throw new Error(ERROR_CODE.LOTTO.NAN)
    }
    if (numbers.some((number) => number === null)) {
        throw new Error(ERROR_CODE.LOTTO.HAS_SPACE)
    }
    if (new Set(numbers).size < numbers.length) {
        throw new Error(ERROR_CODE.LOTTO.OVERLAP)
    }
    if (numbers.some((number) => number > 45 || number <= 0)) {
        throw new Error(ERROR_CODE.LOTTO.INVALID)
    }
    if (numbers.some((number) => number % 1 !== 0)) {
        throw new Error(ERROR_CODE.LOTTO.DECIMAL)
    }
    return true
}


export const bonusNumValid = (numbers, bonusNumber) => {
    if (bonusNumber === null) {
        throw new Error(ERROR_CODE.BONUS_NUM.HAS_SPACE)
    }
    if (numbers.includes(bonusNumber)) {
        throw new Error(ERROR_CODE.BONUS_NUM.OVERLAP)
    }
    if (isNaN(bonusNumber)) {
        throw new Error(ERROR_CODE.BONUS_NUM.NAN)
    }
    if (bonusNumber > 45 || bonusNumber <= 0) {
        throw new Error(ERROR_CODE.BONUS_NUM.INVALID)
    }
    if (bonusNumber > Number.MAX_SAFE_INTEGER) {
        throw new Error(ERROR_CODE.BONUS_NUM.MAX_INTEGER)
    }
    if (bonusNumber % 1 !== 0) {
        throw new Error(ERROR_CODE.BONUS_NUM.DECIMAL)
    }
    return true
}
