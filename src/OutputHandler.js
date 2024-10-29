import { Console } from '@woowacourse/mission-utils';

const PRICE_PER_LOTTO = 1000;

export const displayPurchasedLottoCount = purchaseAmount => {
    const lottoCount = purchaseAmount / PRICE_PER_LOTTO;
    Console.print(`${lottoCount}개를 구매했습니다.`);
};