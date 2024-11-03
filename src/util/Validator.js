import {AMOUNT_ERROR, WINNING_LOTTO_ERROR} from "./Message.js";

export const validAmount = (amount) => {
    const IS_NOT_1000 = amount % 1000 !== 0;

    if (IS_NOT_1000) throw new Error(AMOUNT_ERROR.ERROR_1000);
}

export const validWinningLotto = (winningLotto) => {
    const IS_NOT_COMMA = winningLotto.split(',').length - 1 !== 5;

    if (IS_NOT_COMMA) throw new Error(WINNING_LOTTO_ERROR.ERROR_COMMA);
}