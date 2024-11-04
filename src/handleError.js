export default function validateNumber(input) {
    if (!/^[0-9]*$/.test(input)) {
        throw new Error('[ERROR] 구입 금액은 숫자로 구성되어 있어야 합니다.');
    }
}
