import {AMOUNT_ERROR} from "./Message.js";

export const vaildAmount = (amount) => {
    const IS_NOT_1000 = amount % 1000 !== 0;

    if (IS_NOT_1000) throw new Error(AMOUNT_ERROR.ERROR_1000);
}