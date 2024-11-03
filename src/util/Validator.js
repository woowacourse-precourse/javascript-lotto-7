import {AMOUNT_ERROR, WINNING_LOTTO_ERROR, BONUS_ERROR} from "./Message.js";

export const validAmount = (amount) => {
    const IS_NOT_1000 = amount % 1000 !== 0;
    const IS_NOT_NUMBER = amount.trim() === '' || isNaN(amount);

    if (IS_NOT_NUMBER) throw new Error(AMOUNT_ERROR.ERROR_NUMBER);
    if (IS_NOT_1000) throw new Error(AMOUNT_ERROR.ERROR_1000);
}

export const validWinningLotto = (winningLotto) => {
    const IS_NOT_COMMA = winningLotto.split(',').length - 1 !== 5;
    const IS_NOT_COUNT_6 = winningLotto.split(',').length !== 6;
    const IS_NO_INPUT = winningLotto.trim() === '';
    const IS_NOT_UNIQUE = new Set(winningLotto.split(',')).size !== 6;

    if (IS_NO_INPUT) throw new Error(WINNING_LOTTO_ERROR.ERROR_NO_INPUT);
    if (IS_NOT_COUNT_6) throw new Error(WINNING_LOTTO_ERROR.ERROR_COUNT_6);
    if (IS_NOT_COMMA) throw new Error(WINNING_LOTTO_ERROR.ERROR_COMMA);
    if (IS_NOT_UNIQUE) throw new Error(WINNING_LOTTO_ERROR.ERROR_UNIQUE);
}

export const validBonus = (bonus, winningLotto) => {
    const IS_NOT_UNIQUE = winningLotto.some(num => num === bonus);

    if (IS_NOT_UNIQUE) throw new Error(BONUS_ERROR.ERROR_UNIQUE);
}