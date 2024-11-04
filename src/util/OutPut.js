import {Console} from "@woowacourse/mission-utils";
import {OUTPUT_MESSAGE} from "./Message.js";

export const countOutput = (amount) => {
    return Console.print('\n'+amount / 1000 + OUTPUT_MESSAGE.COUNT);
}

export const lottosOutput = (amount, lottos) => {
    for (let i = 0; i < amount / 1000; i++) {
        Console.print('[' + lottos[i].join(', ') + ']');
    }
}

export const resultOutput = (matchLottos, revenue) => {
    Console.print(OUTPUT_MESSAGE.RESULT);
    Console.print(OUTPUT_MESSAGE[`MATCH_3`] + matchLottos['3'] + '개');
    Console.print(OUTPUT_MESSAGE[`MATCH_4`] + matchLottos['4'] + '개');
    Console.print(OUTPUT_MESSAGE[`MATCH_5`] + matchLottos['5'] + '개');
    Console.print(OUTPUT_MESSAGE[`MATCH_5_BONUS`] + matchLottos['5_BONUS'] + '개');
    Console.print(OUTPUT_MESSAGE[`MATCH_6`] + matchLottos['6'] + '개');
    Console.print(OUTPUT_MESSAGE[`REVENUE_PER`] + revenue + '%입니다.');
}