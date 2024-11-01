import { Console } from "@woowacourse/mission-utils";

export function printLottoList(quantity, lottoList) {
    Console.print(`${quantity}개를 구매했습니다.`);
    lottoList.forEach(a => Console.print(`[${a.join(', ')}]`));
}

export function printWinResult(rankList) {
    const FORM = [
        '3개 일치 (5,000원)',
        '4개 일치 (50,000원)',
        '5개 일치 (1,500,000원)',
        '5개 일치, 보너스 볼 일치 (30,000,000원)',
        '6개 일치 (2,000,000,000원)'
    ];
    FORM.forEach((a, idx) => {
        const rank = 5 - idx;
        const matchCount = getWinCount(rankList, rank);
        Console.print(`${a} - ${matchCount}개`);
    })
}

export function printRateResult(rankList, amount) {
    const winAmount = [5000, 50000, 1500000, 30000000, 2000000000];
    const result = winAmount.reduce((acc, cur, idx) => {
        const rank = 5 - idx;
        const matchCount = getWinCount(rankList, rank);
        return acc + cur * matchCount;
    })
    const rate = (result / amount * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
}

function getWinCount(result, rank) {
    return result.filter(a => a === rank).length;
}