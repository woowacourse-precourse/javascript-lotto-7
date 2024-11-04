export function validateBudget(budget) {
    if (isNaN(budget)) {
        throw new Error('[ERROR] 금액은 숫자만 입력 가능합니다.');
    }
    if (budget <= 0) {
        throw new Error('[ERROR] 금액은 0 이상이어야 합니다.');
    }
    if (budget % 1000 !== 0) {
        throw new Error('[ERROR] 로또 금액과 나누어 떨어지지 않습니다.');
    }
}

export function validateWinnum(winnum) {
    if (winnum.some(num => isNaN(num))) {
        throw new Error('[ERROR] 당첨번호는 숫자여야 합니다.');
    }
    if (winnum.some(num => num < 1 || num > 45)) {
        throw new Error('[ERROR] 당첨번호는 1 ~ 45 범위 안에 있어야 합니다.');
    }
    const uniqueNums = new Set(winnum);
    if (uniqueNums.size !== winnum.length) {
        throw new Error('[ERROR] 당첨번호는 중복될 수 없습니다.');
    }
}

export function validateBonusnum(bonusnum, winnum) {
    if (isNaN(bonusnum)) {
        throw new Error('[ERROR] 보너스번호는 숫자여야 합니다.');
    }
    if (bonusnum < 1 || bonusnum > 45) {
        throw new Error('[ERROR] 보너스번호는 1 ~ 45 범위 안에 있어야 합니다.');
    }
    if (winnum.includes(bonusnum)) {
        throw new Error('[ERROR] 보너스번호는 당첨번호와 중복될 수 없습니다.');
    }
}

export function validateEmptyInput(input, errorMessage) {
    if (input === null || input.trim() === '') {
        throw new Error('[ERROR] 입력을 하지 않았습니다.');
    }
}