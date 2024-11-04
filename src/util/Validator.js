import {AMOUNT_ERROR, WINNING_LOTTO_ERROR, BONUS_ERROR} from "./Message.js";

export const validAmount = (amount) => {
    const IS_NOT_1000 = amount % 1000 !== 0;
    const IS_NOT_NUMBER = amount.trim() === '' || isNaN(amount);

    if (IS_NOT_NUMBER) throw new Error(AMOUNT_ERROR.ERROR_NUMBER);
    if (IS_NOT_1000) throw new Error(AMOUNT_ERROR.ERROR_1000);
}

export const validWinningLotto = (winningLotto) => {
    const IS_NOT_COMMA = winningLotto.length - 1 !== 5;
    const IS_NOT_COUNT_6 = winningLotto.length !== 6;
    const IS_NO_INPUT = winningLotto.map(num=>String(num).trim()).includes('') ;
    const IS_NOT_UNIQUE = new Set(winningLotto).size !== 6;
    const IS_NOT_RANGE = winningLotto.some(num => !((1 <= num) && (num <= 45)));

    if (IS_NO_INPUT) throw new Error(WINNING_LOTTO_ERROR.ERROR_NO_INPUT);
    if (IS_NOT_COUNT_6) throw new Error(WINNING_LOTTO_ERROR.ERROR_COUNT_6);
    if (IS_NOT_COMMA) throw new Error(WINNING_LOTTO_ERROR.ERROR_COMMA);
    if (IS_NOT_UNIQUE) throw new Error(WINNING_LOTTO_ERROR.ERROR_UNIQUE);
    if (IS_NOT_RANGE) throw new Error(WINNING_LOTTO_ERROR.ERROR_RANGE);
}

export const validBonus = (bonus, winningLotto) => {
    const IS_NOT_UNIQUE = winningLotto.some(num => num === bonus);
    const IS_NOT_RANGE = !((1 <= bonus) && (bonus <= 45));
    const IS_NO_INPUT = bonus.trim() === '';

    if (IS_NO_INPUT) throw new Error(BONUS_ERROR.ERROR_NO_INPUT);
    if (IS_NOT_UNIQUE) throw new Error(BONUS_ERROR.ERROR_UNIQUE);
    if (IS_NOT_RANGE) throw new Error(BONUS_ERROR.ERROR_RANGE);
}