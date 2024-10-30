export function checkAmount(input) {
    if (input % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력하세요.');
    }
}

export function checkWinNumbers(input) {
    if (input.length !== 6) {
        throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (!input.every(a => a >= 1 && a <= 45)) {
        throw new Error('[ERROR] 로또 번호는 1~45여야 합니다.');
    }
    if ([...new Set(input)].length !== 6) {
        throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
}

export function checkBonusNumber(input, winNumbers) {
    if (isNaN(input)) {
        throw new Error('[ERROR] 숫자를 입력하세요.');
    }
    if (winNumbers.includes(input)) {
        throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
    }
    if (!(input >= 1 && input <= 45)) {
        throw new Error('[ERROR] 보너스 번호는 1~45여야 합니다.');
    }
}