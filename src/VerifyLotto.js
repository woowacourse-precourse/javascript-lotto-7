export function verifyLotto(lottoArr, correctNum, bonus) {
    const result = Array(7).fill(0);

    for (let i = 0; i < lottoArr.length; i++) {
        let outcome = numOfCorrected(lottoArr[i], correctNum);
        // 보너스 번호를 포함하는 경우
        if (outcome == 4 && chkBonusLotto(lottoArr[i], bonus)) {
            result[2] += 1;
            continue;
        }
        if (outcome > 2) result[outcome] += 1;
    }
    return result;
}

function numOfCorrected(nums, correctNum) {
    let cnt = 0;
    for (let i = 0; i < 6; i++) {
        if (nums.includes(correctNum[i])) cnt++;
    }
    return cnt;
}

function chkBonusLotto(nums, bonus) {
    for (let i = 0; i < 6; i++) {
        if (nums[i] == bonus) return true;
    }
    return false;
}
