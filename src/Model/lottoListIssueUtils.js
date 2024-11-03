import { Random } from '@woowacourse/mission-utils';

export const issueLottoList = (lottoCount) => {
  const lottoList = [];
  for (let i = 0; i < lottoCount; i += 1) {
    const issueOneLottoList = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortResult = issueOneLottoList.sort((a, b) => a - b);
    lottoList.push(sortResult);
  }

  return lottoList;
};