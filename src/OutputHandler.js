import { LOTTO, PRIZE_INFO, MESSAGES, DELIMITERS } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
import { calculateTotalPrize, calculateYieldRate } from './Calculator.js';

export const displayPurchasedLottoCount = purchaseAmount => {
    const lottoCount = purchaseAmount / LOTTO.PRICE_PER_TICKET;
    Console.print(`\n${lottoCount}${MESSAGES.INFO.PURCHASED_LOTTO_COUNT}`);

    return lottoCount;
};

export const displayGeneratedLottos = lottos => {
    lottos.forEach((lotto) => {
        Console.print(`[${lotto.join(DELIMITERS.LOTTO_NUMBERS)}]`);
    });
}

export const displayWinningDetails = (winningsCount, purchaseAmount) => {
    Console.print(MESSAGES.INFO.WINNING_STATISTICS_HEADER);
    let totalPrize = calculateTotalPrize(winningsCount, PRIZE_INFO);

    Object.entries(PRIZE_INFO).forEach(([key, { label, prize }]) => {
        Console.print(`${label} (${prize.toLocaleString()}원) - ${winningsCount[key]}개\n`);
    });

    displayProfitRate(purchaseAmount, totalPrize);
}

const displayProfitRate = (purchaseAmount, totalPrize) => {
    const YieldRate = calculateYieldRate(purchaseAmount, totalPrize);
    Console.print(`${MESSAGES.INFO.YIELD_RATE}${YieldRate.toFixed(1)}%입니다.`);
}