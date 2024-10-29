export function checkAmount(input) {
    if (input % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력하세요');
    }
}