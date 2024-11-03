import { ERROR } from "./constants.js";

export function checkAmount(input) {
    if (isNaN(input) || input % 1000 !== 0) {
        throw new Error(ERROR.AMOUNT_INVALID);
    }
}

export function checkWinNumbers(input) {
    if (input.length !== 6) {
        throw new Error(ERROR.WIN_NUMBER_COUNT);
    }
    if (!input.every(a => a >= 1 && a <= 45)) {
        throw new Error(ERROR.WIN_NUMBER_RANGE);
    }
    if ([...new Set(input)].length !== 6) {
        throw new Error(ERROR.WIN_NUMBER_DUPLICATE);
    }
}

export function checkBonusNumber(input, winNumbers) {
    if (isNaN(input)) {
        throw new Error(ERROR.BONUS_NUMBER_NOT_NUMBER);
    }
    if (winNumbers.includes(input)) {
        throw new Error(ERROR.BONUS_NUMBER_DUPLICATE);
    }
    if (!(input >= 1 && input <= 45)) {
        throw new Error(ERROR.BONUS_NUMBER_RANGE);
    }
}