import { Console } from "@woowacourse/mission-utils";

export function printLottoList(quantity, lottoList) {
    Console.print(`${quantity}개를 구매했습니다.`);
    lottoList.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
}

export function printWinResult(lottoGame) {
    const results = lottoGame.getWinResult();
    results.forEach(result => {
        Console.print(result);
    });
}

export function printYieldResult(lottoGame) {
    const rate = lottoGame.getYield();
    Console.print(`총 수익률은 ${rate}%입니다.`);
}