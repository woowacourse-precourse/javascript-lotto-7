import { ERR_MSG_BONUS_NUMBER } from "../constants.js";

const getBonusNumber = (bonusNumInput) => {
    if (validateString(bonusNumInput) && validateNumber(+bonusNumInput)) {
        return +bonusNumInput;
    }

    throw new Error(ERR_MSG_BONUS_NUMBER);
}

const validateString = (str) => {
    const regex = new RegExp("^\\d+$");
    return regex.test(str);
}

const validateNumber = (num) => {
    return num >= 1 && num <= 45;
}

export default getBonusNumber;