import { Random } from '@woowacourse/mission-utils';

export const generatedLottoList = (purchaseCount) => {
  const lottoList = [];
  for (let i = 0; i < purchaseCount; i += 1) {
    const oneLottoListGenerator = Random.pickUniqueNumbersInRange(1, 45, 6);
    const ascendingOrderSort = oneLottoListGenerator.sort((a, b) => a - b);
    lottoList.push(ascendingOrderSort);
  }

  return lottoList;
};