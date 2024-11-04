export function validateNumber(input, subject) {
    if (!/^[0-9]*$/.test(input)) {
        throw new Error(`[ERROR] ${subject} 숫자로 구성되어 있어야 합니다.`);
    }
}

export function validateDuplicate(input, subject) {
    if (new Set(input).size !== input.length) {
        throw new Error(`[ERROR] ${subject} 중복되면 안됩니다.`);
    }
}

export function validateSix(input, subject) {
    if (input.length !== 6) {
        throw new Error(`[ERROR] ${subject} 6개여야 합니다.`);
    }
}
