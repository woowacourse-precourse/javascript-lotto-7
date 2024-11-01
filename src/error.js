import { ERROR_MESSAGE } from "../src/message.js";

export function validateCost(cost) {
    if (isNaN(cost)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    if (!Number.isInteger(cost)) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    if (cost === 0) throw new Error(ERROR_MESSAGE.NUM_IS_ZERO);
    if (cost < 0) throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    if (cost%1000 !== 0) {throw new Error(ERROR_MESSAGE.VALIDATE_DIVERSITY_BY_THOUSAND)};
};