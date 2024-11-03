import { Console } from '@woowacourse/mission-utils';
import LottoOutputWriter from '../src/classes/LottoOutputWriter.js';
import Lotto from '../src/classes/Lotto.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('LottoOutputWriter 클래스 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // 로또 출력 테스트
  test('printLottos 메서드가 로또 개수와 각 로또 번호를 올바르게 출력한다.', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];

    LottoOutputWriter.printLottos(lottos);

    expect(Console.print).toHaveBeenCalledWith('\n2개를 구매했습니다.');
    expect(Console.print).toHaveBeenCalledWith('[1, 2, 3, 4, 5, 6]\n[7, 8, 9, 10, 11, 12]\n');
  });

  // 당첨 결과 출력 테스트
  test('printWinningResults 메서드가 당첨 통계와 각 등수 결과를 올바르게 출력한다.', () => {
    const winningResults = [0, 0, 1, 2, 3]; // 예: 3등 1개, 4등 2개, 5등 3개
    LottoOutputWriter.printWinningResults(winningResults);

    expect(Console.print).toHaveBeenCalledWith('\n당첨 통계\n---');
    expect(Console.print).toHaveBeenCalledWith('3개 일치 (5,000원) - 3개');
    expect(Console.print).toHaveBeenCalledWith('4개 일치 (50,000원) - 2개');
    expect(Console.print).toHaveBeenCalledWith('5개 일치 (1,500,000원) - 1개');
    expect(Console.print).toHaveBeenCalledWith('5개 일치, 보너스 볼 일치 (30,000,000원) - 0개');
    expect(Console.print).toHaveBeenCalledWith('6개 일치 (2,000,000,000원) - 0개');
  });

  // 수익률 출력 테스트
  test('printYield 메서드가 수익률을 올바르게 출력한다.', () => {
    const yieldRate = 62.5;

    LottoOutputWriter.printYield(yieldRate);

    expect(Console.print).toHaveBeenCalledWith('총 수익률은 62.5%입니다.');
  });
});
