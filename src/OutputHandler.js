import { Console } from '@woowacourse/mission-utils';

const PRICE_PER_LOTTO = 1000;

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