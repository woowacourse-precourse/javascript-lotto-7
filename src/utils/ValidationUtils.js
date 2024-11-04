import { formatErrorMessage } from "../constants/Messages.js";

export function isBlank(value, errorMessage) {
    if (value.toString().trim() === "") {
        throw Error(formatErrorMessage(errorMessage));
    }
}

export function isInteger(value, errorMessage) {
    if (!Number.isInteger(value)) {
        throw Error(formatErrorMessage(errorMessage));
    }
}

export function isInRange(value, min, max, errorMessage) {
    if (value < min || value > max) {
        throw Error(formatErrorMessage(errorMessage));
    }
}

export function hasNoDuplicates(array, errorMessage) {
    const uniqueValues = new Set(array);
    if (uniqueValues.size !== array.length) {
        throw Error(formatErrorMessage(errorMessage));
    }
}

export function validateWithRegex(regex, value, errorMessage) {
    if (!regex.test(value)) {
        throw Error(
            formatErrorMessage(errorMessage)
        );
    }
}