import { Console } from '@woowacourse/mission-utils';
import { calculateTotalPrize } from './Calculator.js';

const PRICE_PER_LOTTO = 1000;
const prizeInfo = {
    match_3: { label: '3개 일치', prize: 5_000 },
    match_4: { label: '4개 일치', prize: 50_000 },
    match_5: { label: '5개 일치', prize: 1_500_000 },
    match_6_bonus: { label: '5개 일치, 보너스 볼 일치', prize: 30_000_000 },
    match_6_full: { label: '6개 일치', prize: 2_000_000_000 },
};

export const displayPurchasedLottoCount = purchaseAmount => {
    const lottoCount = purchaseAmount / PRICE_PER_LOTTO;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);

    return lottoCount;
};

export const displayGeneratedLottos = lottos => {
    lottos.forEach((lotto) => {
        Console.print(`[${lotto.join(', ')}]`);
    });
}

export const displayWinningDetails = winningsCount => {
    Console.print('\n당첨 통계\n---\n');
    let totalPrize = calculateTotalPrize(winningsCount, prizeInfo);

    Object.entries(prizeInfo).forEach(([key, { label, prize }]) => {
        Console.print(`${label} (${prize.toLocaleString()}원) - ${winningsCount[key]}개\n`);
    });

    // Console.print(`총 상금: ${totalPrize}`);
}