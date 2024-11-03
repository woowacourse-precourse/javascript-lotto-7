import { ERR_MSG_WINNING_NUMBERS_INVALID_STRING } from "../constants.js";

const getWinningNums = (winningNumsInput) => {
    if (validate(winningNumsInput)) {
        return winningNumsInput.split(",").map(Number);
    }
    throw new Error(ERR_MSG_WINNING_NUMBERS_INVALID_STRING);
}

const validate = (str) => {
    const regex = new RegExp("^(\\d+,)*\\d+$");
    return regex.test(str);
}

export default getWinningNums;