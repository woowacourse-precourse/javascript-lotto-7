import Lotto from './Lotto.js';
import { picknumber } from './Random.js';
import { LOTTO } from './constant.js';

export const purchase = (price, budget) => {
    const trynum = parseInt(budget / price);
    const lottoTickets = [];

    for (let i = 0; i < trynum; i++) {
        const numbers = picknumber(LOTTO.MIN, LOTTO.MAX, LOTTO.NUM);
        const lotto = new Lotto(numbers);
        lottoTickets.push(lotto);
    }

    return lottoTickets;
}
