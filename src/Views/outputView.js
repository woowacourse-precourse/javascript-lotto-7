import { Console } from "@woowacourse/mission-utils";

export function printLottoList(quantity, lottoList) {
    Console.print('');
    Console.print(`${quantity}개를 구매했습니다.`);
    lottoList.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
    Console.print('');
}

export function printWinResult(lottoGame) {
    Console.print('\n당첨 통계');
    Console.print('---');
    const results = lottoGame.getWinResult();
    results.forEach(result => {
        Console.print(result);
    });
}

export function printYieldResult(lottoGame) {
    const rate = lottoGame.getYield();
    Console.print(`총 수익률은 ${rate}%입니다.`);
}