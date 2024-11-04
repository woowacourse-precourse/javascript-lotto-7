export function verifyLotto(lottoArr, correctNum) {
    const result = Array(7).fill(0);

    for (let i = 0; i < lottoArr.length; i++) {
        let outcome = numOfCorrected(lottoArr[i], correctNum);
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
