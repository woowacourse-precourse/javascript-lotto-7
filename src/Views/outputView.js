import { Console } from "@woowacourse/mission-utils";

export async function printLottoList(quantity, lottoList) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
    lottoList.forEach(a => Console.print(a));
    Console.print('');
}