import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/components/Lotto/Lotto.js';
import VIEWMESSAGES from '../src/resources/VIEWMESSAGES.js';
import {
  printFinalResults,
  printGeneratedList,
} from '../src/utils/io/OutputView.js';
import RULES from '../src/resources/RULES.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('printGeneratedList 함수 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('로또 리스트 출력 테스트', () => {
    const lottoList = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];

    printGeneratedList(lottoList);

    expect(Console.print).toHaveBeenNthCalledWith(1, '');
    expect(Console.print).toHaveBeenNthCalledWith(2, '2개를 구매했습니다.');
    expect(Console.print).toHaveBeenNthCalledWith(3, '[1, 2, 3, 4, 5, 6]');
    expect(Console.print).toHaveBeenNthCalledWith(4, '[7, 8, 9, 10, 11, 12]');
    expect(Console.print).toHaveBeenNthCalledWith(5, '');
  });

  test('printFinalResults - 최종 결과 출력', () => {
    const statistics = new Map([
      [3, { count: 1, prize: RULES.THREE_CORRECT_PRIZE }],
      [4, { count: 2, prize: RULES.FOUR_CORRECT_PRIZE }],
      ['5withoutBonus', { count: 1, prize: RULES.FIVE_CORRECT_PRIZE }],
      ['5withBonus', { count: 2, prize: RULES.FIVE_BONUS_CORRECT_PRIZE }],
      [6, { count: 0, prize: RULES.SIX_CORRECT_PRIZE }],
      ['ROI', 21.5],
    ]);

    printFinalResults(statistics);

    const expectedOutput = [
      VIEWMESSAGES.STATISTICS_TITLE,
      `${3}개 일치 (${(5000).toLocaleString()}원) - ${1}개`,
      `${4}개 일치 (${(50000).toLocaleString()}원) - ${2}개`,
      `${5}개 일치 (${(1500000).toLocaleString()}원) - ${1}개`,
      `${5}개 일치, 보너스 볼 일치 (${(30000000).toLocaleString()}원) - ${2}개`,
      `${6}개 일치 (${(2000000000).toLocaleString()}원) - ${0}개`,
      `총 수익률은 21.5%입니다.`,
    ].join('\n');

    expect(Console.print).toHaveBeenCalledTimes(2);
    expect(Console.print).toHaveBeenCalledWith(expectedOutput);
  });
});
