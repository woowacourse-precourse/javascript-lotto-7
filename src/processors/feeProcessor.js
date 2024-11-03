import { ERR_MSG_PURCHASE_FEE } from "../constants.js";

const getFee = (feeInput) => {
    if (validate(feeInput)) return +feeInput;
    throw new Error(ERR_MSG_PURCHASE_FEE);
}

const validate = (str) => {
    const regex = new RegExp("\\d+000$");
    if (regex.test(str)) return true;
    return false;
}

export default getFee;