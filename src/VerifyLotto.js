import { Console } from '@woowacourse/mission-utils';

export function verifyLotto(lottoArr, correctNum, bonus) {
    const result = Array(7).fill(0);

    for (let i = 0; i < lottoArr.length; i++) {
        let outcome = numOfCorrected(lottoArr[i], correctNum);
        // 보너스 번호를 포함하는 경우
        if (outcome == 5 && chkBonusLotto(lottoArr[i], bonus)) {
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

export function showLottoStatistics(arr) {
    Console.print(`3개 일치 (5,000원) - ${arr[3]}`);
    Console.print(`4개 일치 (50,000원) - ${arr[4]}`);
    Console.print(`5개 일치 (1,500,000원) - ${arr[5]}`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${arr[2]}`);
    Console.print(`6개 일치 (2,000,000,000원) - ${arr[6]}`);
}
