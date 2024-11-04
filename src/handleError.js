export function validateNumber(input, subject) {
    if (!/^[0-9]*$/.test(input)) {
        throw new Error(`[ERROR] ${subject} 숫자로 구성되어 있어야 합니다.`);
    }
}
