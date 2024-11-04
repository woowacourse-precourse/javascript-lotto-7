import Lotto from './Lotto.js';
import { picknumber } from './Random.js';
import { LOTTO } from './constant.js';
import { Console } from '@woowacourse/mission-utils';

export const purchase = (trynum) => {
    const lottoTickets = [];

    for (let i = 0; i < trynum; i++) {
        const numbers = picknumber(LOTTO.MIN, LOTTO.MAX, LOTTO.NUM);
        const lotto = new Lotto(numbers);
        lottoTickets.push(lotto);
    }

    printpurchase(trynum);
    printnum(lottoTickets);

    return lottoTickets;
}

const printpurchase = (trynum) => {
    Console.print(`\n${trynum}개를 구매했습니다.\n`);
}

const printnum = (lottotickets) => {
    lottotickets.forEach(lotto => {
        Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
}