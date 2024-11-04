import { Console } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = {
  LOTTO_COUNT: (n) => `\n${n}개를 구매했습니다.`,
  SUCCESS_STATICS: (table) =>
    `\n당첨 통계\n---\n3개 일치 (5,000원) - ${table[3]}개\n4개 일치 (50,000원) - ${table[4]}개\n5개 일치 (1,500,000원) - ${table[5]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${table[7]}개\n6개 일치 (2,000,000,000원) - ${table[6]}개\n`,
  SUCCESS_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
  LOTTO: (arr) =>
    `[${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}, ${arr[5]}]`,
};

const outputView = {
  printPurchaseCount(cnt) {
    Console.print(OUTPUT_MESSAGE.LOTTO_COUNT(cnt));
  },
  printLotto(lotto) {
    Console.print(OUTPUT_MESSAGE.LOTTO(lotto));
  },
  printSuccessStatics(scoreTable) {
    Console.print(OUTPUT_MESSAGE.SUCCESS_STATICS(scoreTable));
  },
  printSuccessRate(rate) {
    Console.print(OUTPUT_MESSAGE.SUCCESS_RATE(rate));
  },
};

export default outputView;
